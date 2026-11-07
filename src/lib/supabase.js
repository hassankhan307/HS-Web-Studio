import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = () => {
  return (
    typeof supabaseUrl === 'string' &&
    supabaseUrl.length > 0 &&
    !supabaseUrl.includes('your-project-id') &&
    typeof supabaseAnonKey === 'string' &&
    supabaseAnonKey.length > 0 &&
    !supabaseAnonKey.includes('your-supabase-anon-key')
  );
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })
  : null;

// Initial genuine verified client fallback (matches testimonials.js)
const INITIAL_GENUINE_SEED = [
  {
    id: 'seed-ziphyer-001',
    client_name: 'Ziphyer Fashion',
    business_name: 'Ziphyer',
    email: 'contact@ziphyer.com',
    service_type: 'Shopify E-Commerce Store',
    rating: 5,
    review_text:
      'HS Web Studio delivered our online storefront with great attention to mobile responsiveness and catalog organization. Our customers enjoy a fast and clean checkout experience.',
    status: 'APPROVED',
    is_verified_client: true,
    is_featured: true,
    permission_to_publish: true,
    created_at: '2026-10-15T10:00:00.000Z'
  }
];

// Fallback in-memory storage for unconfigured development environments
const getLocalFallbackStore = () => {
  try {
    const raw = localStorage.getItem('hs_local_reviews_preview');
    if (!raw) {
      localStorage.setItem('hs_local_reviews_preview', JSON.stringify(INITIAL_GENUINE_SEED));
      return INITIAL_GENUINE_SEED;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_GENUINE_SEED;
  }
};

const setLocalFallbackStore = (list) => {
  try {
    localStorage.setItem('hs_local_reviews_preview', JSON.stringify(list));
  } catch (err) {
    console.error('Failed to update local preview store:', err);
  }
};

/**
 * Fetch approved reviews for public display.
 * Returns only approved, non-sensitive client review data (email is never exposed).
 */
export async function fetchApprovedReviews() {
  if (isSupabaseConfigured() && supabase) {
    try {
      // Query the reviews table directly with selective columns (or public_reviews view)
      const { data, error } = await supabase
        .from('reviews')
        .select('id, client_name, business_name, service_type, rating, review_text, is_verified_client, is_featured, created_at')
        .eq('status', 'APPROVED')
        .eq('permission_to_publish', true)
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Supabase query error, falling back to initial verified data:', error.message);
        return { data: INITIAL_GENUINE_SEED.map(({ email, ...rest }) => rest), error: null };
      }
      return { data: data || [], error: null };
    } catch (err) {
      console.error('Error fetching approved reviews:', err);
      return { data: INITIAL_GENUINE_SEED.map(({ email, ...rest }) => rest), error: err.message };
    }
  }

  // Unconfigured environment fallback
  const store = getLocalFallbackStore();
  const approved = store
    .filter((r) => r.status === 'APPROVED' && r.permission_to_publish)
    .map(({ email, ...rest }) => rest);
  return { data: approved, error: null };
}

/**
 * Submit a new client review.
 * Default status is always PENDING.
 * Verified and featured flags are strictly forced to false.
 */
export async function submitClientReview(reviewPayload) {
  const {
    client_name,
    business_name,
    email,
    service_type,
    rating,
    review_text,
    permission_to_publish,
    honeypot
  } = reviewPayload;

  // Bot honeypot check
  if (honeypot && honeypot.trim().length > 0) {
    return { data: null, error: 'Spam submission detected.' };
  }

  // Client-side validation
  if (!client_name || client_name.trim().length < 2) {
    return { data: null, error: 'Please enter your full name.' };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { data: null, error: 'Please enter a valid email address.' };
  }
  if (!service_type || service_type.trim().length === 0) {
    return { data: null, error: 'Please select the service or project delivered.' };
  }
  const numericRating = Number(rating);
  if (!numericRating || numericRating < 1 || numericRating > 5) {
    return { data: null, error: 'Please select a star rating between 1 and 5.' };
  }
  if (!review_text || review_text.trim().length < 15) {
    return { data: null, error: 'Review text must be at least 15 characters.' };
  }
  if (!permission_to_publish) {
    return { data: null, error: 'Please give permission to display your review publicly.' };
  }

  const newReviewRecord = {
    client_name: client_name.trim(),
    business_name: business_name ? business_name.trim() : null,
    email: email.trim().toLowerCase(),
    service_type: service_type.trim(),
    rating: numericRating,
    review_text: review_text.trim(),
    status: 'PENDING',
    is_verified_client: false,
    is_featured: false,
    permission_to_publish: true
  };

  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([newReviewRecord])
        .select('id, client_name, status, created_at')
        .single();

      if (error) {
        return { data: null, error: error.message };
      }
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err.message };
    }
  }

  // Fallback simulation in unconfigured preview
  const recordWithMeta = {
    ...newReviewRecord,
    id: 'local-' + Date.now(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  const store = getLocalFallbackStore();
  store.unshift(recordWithMeta);
  setLocalFallbackStore(store);

  return {
    data: {
      id: recordWithMeta.id,
      client_name: recordWithMeta.client_name,
      status: 'PENDING',
      created_at: recordWithMeta.created_at
    },
    error: null
  };
}

/**
 * Fetch reviews for admin dashboard with full moderation data.
 * Requires authenticated admin session.
 */
export async function fetchAdminReviews(filterStatus = 'ALL') {
  if (isSupabaseConfigured() && supabase) {
    try {
      let query = supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (filterStatus && filterStatus !== 'ALL') {
        query = query.eq('status', filterStatus);
      }

      const { data, error } = await query;
      if (error) throw error;
      return { data: data || [], error: null };
    } catch (err) {
      return { data: [], error: err.message };
    }
  }

  // Fallback preview
  const store = getLocalFallbackStore();
  const filtered = filterStatus === 'ALL' ? store : store.filter((r) => r.status === filterStatus);
  return { data: filtered, error: null };
}

/**
 * Update review status, verified badge, or featured flag.
 */
export async function updateReviewAdmin(id, updates) {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err.message };
    }
  }

  // Fallback preview
  const store = getLocalFallbackStore();
  const index = store.findIndex((r) => r.id === id);
  if (index !== -1) {
    store[index] = { ...store[index], ...updates, updated_at: new Date().toISOString() };
    setLocalFallbackStore(store);
    return { data: store[index], error: null };
  }
  return { data: null, error: 'Review not found in local store.' };
}

/**
 * Delete a review.
 */
export async function deleteReviewAdmin(id) {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { error } = await supabase.from('reviews').delete().eq('id', id);
      if (error) throw error;
      return { success: true, error: null };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // Fallback preview
  const store = getLocalFallbackStore();
  const updated = store.filter((r) => r.id !== id);
  setLocalFallbackStore(updated);
  return { success: true, error: null };
}

/**
 * Admin Authentication Helpers
 */
export async function adminSignIn(email, password) {
  if (isSupabaseConfigured() && supabase) {
    return await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password
    });
  }

  // Simple dev-mode simulation check if Supabase is unconfigured
  if (email.trim().toLowerCase() === 'hswebstudio3@gmail.com' && password === 'admin123') {
    const mockUser = { id: 'mock-admin-01', email: 'hswebstudio3@gmail.com' };
    localStorage.setItem('hs_mock_admin_session', JSON.stringify(mockUser));
    return { data: { user: mockUser }, error: null };
  }
  return { data: null, error: { message: 'Invalid credentials or Supabase not configured.' } };
}

export async function adminSignOut() {
  if (isSupabaseConfigured() && supabase) {
    return await supabase.auth.signOut();
  }
  localStorage.removeItem('hs_mock_admin_session');
  return { error: null };
}

export async function getAdminSession() {
  if (isSupabaseConfigured() && supabase) {
    const { data } = await supabase.auth.getSession();
    return data?.session?.user || null;
  }
  const raw = localStorage.getItem('hs_mock_admin_session');
  return raw ? JSON.parse(raw) : null;
}

/**
 * Subscribe to realtime reviews updates (inserts, updates, deletes)
 */
export function subscribeToReviews(callback) {
  if (!isSupabaseConfigured() || !supabase) {
    return () => {};
  }

  const channel = supabase
    .channel('reviews-realtime-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'reviews' },
      (payload) => {
        if (typeof callback === 'function') {
          callback(payload);
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
