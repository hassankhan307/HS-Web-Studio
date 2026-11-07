-- ==============================================================================
-- HS Web Studio: Client Reviews & Testimonials Database Schema
-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- ==============================================================================

-- 1. Create reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  business_name TEXT,
  email TEXT NOT NULL,
  service_type TEXT NOT NULL,
  rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')),
  is_verified_client BOOLEAN NOT NULL DEFAULT false,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  permission_to_publish BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Create admins table for secure role-based access control
CREATE TABLE IF NOT EXISTS public.admins (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_reviews_updated_at ON public.reviews;
CREATE TRIGGER set_reviews_updated_at
BEFORE UPDATE ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- 4. Create Indexes for query performance
CREATE INDEX IF NOT EXISTS idx_reviews_status ON public.reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON public.reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_is_featured ON public.reviews(is_featured);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON public.reviews(rating);
CREATE INDEX IF NOT EXISTS idx_reviews_service_type ON public.reviews(service_type);

-- 5. Helper function to check if current user is an authenticated admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admins WHERE id = auth.uid()
  ) OR (
    auth.jwt() ->> 'email' = 'hswebstudio3@gmail.com'
  );
$$;

-- 6. Enable Row Level Security (RLS)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- 7. RLS Policies for reviews
-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Public can submit pending reviews" ON public.reviews;
DROP POLICY IF EXISTS "Public can read approved reviews" ON public.reviews;
DROP POLICY IF EXISTS "Admins have full access to reviews" ON public.reviews;

-- A) Public can submit a review with status=PENDING only
CREATE POLICY "Public can submit pending reviews" ON public.reviews
FOR INSERT TO anon, authenticated
WITH CHECK (
  status = 'PENDING' 
  AND is_verified_client = false 
  AND is_featured = false 
  AND permission_to_publish = true
  AND length(trim(client_name)) > 0
  AND length(trim(email)) > 3
  AND rating >= 1 AND rating <= 5
  AND length(trim(review_text)) >= 10
);

-- B) Public can only SELECT approved reviews (email is omitted via client query or public view)
CREATE POLICY "Public can read approved reviews" ON public.reviews
FOR SELECT TO anon, authenticated
USING (status = 'APPROVED' AND permission_to_publish = true);

-- C) Admins have full SELECT, UPDATE, DELETE access
CREATE POLICY "Admins have full access to reviews" ON public.reviews
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- 8. RLS Policies for admins table
DROP POLICY IF EXISTS "Admins can view admin table" ON public.admins;
CREATE POLICY "Admins can view admin table" ON public.admins
FOR SELECT TO authenticated
USING (public.is_admin());

-- 9. Create a Public Safe View that strips out private email addresses
CREATE OR REPLACE VIEW public.public_reviews WITH (security_invoker = false) AS
SELECT 
  id,
  client_name,
  business_name,
  service_type,
  rating,
  review_text,
  is_verified_client,
  is_featured,
  created_at
FROM public.reviews
WHERE status = 'APPROVED' AND permission_to_publish = true;

GRANT SELECT ON public.public_reviews TO anon, authenticated;

-- 10. Enable Supabase Realtime for instant reviews updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.reviews;

-- 11. Seed genuine initial client review (Ziphyer - live client verified delivery)
INSERT INTO public.reviews (
  client_name,
  business_name,
  email,
  service_type,
  rating,
  review_text,
  status,
  is_verified_client,
  is_featured,
  permission_to_publish,
  created_at
) VALUES (
  'Ziphyer Fashion',
  'Ziphyer',
  'contact@ziphyer.com',
  'Shopify E-Commerce Store',
  5,
  'HS Web Studio delivered our online storefront with great attention to mobile responsiveness and catalog organization. Our customers enjoy a fast and clean checkout experience.',
  'APPROVED',
  true,
  true,
  true,
  '2026-10-15 10:00:00+00'
) ON CONFLICT DO NOTHING;
