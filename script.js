/* =========================================================
   HS WEB STUDIO — script.js
   Vanilla JS only. No dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     Portfolio data — edit this array to add / change projects.
     category must be one of: business | ecommerce | healthcare
     | restaurant | other
     --------------------------------------------------------- */
  const projects = [
    {
      title: "Aurelia Home",
      category: "business",
      categoryLabel: "Home Décor",
      description: "Modern home décor website concept, built to showcase a product catalogue with a premium, editorial feel.",
      colors: ["#2a3d2f", "#0f1a13"],
      demoUrl: "https://hassankhan307.github.io/Home-decor-demo/index.html",
      image: "assets/images/aurelia-home.avif"
    },
    {
      title: "Nestora",
      category: "business",
      categoryLabel: "Furniture",
      description: "Furniture store website concept, designed around clean product presentation and easy browsing by category.",
      colors: ["#3a2f1a", "#160f08"],
      demoUrl: "https://hassankhan307.github.io/Furniture-demo/index.html",
      image: "assets/images/nestora.avif"
    },
    {
      title: "Élan Dental",
      category: "healthcare",
      categoryLabel: "Healthcare / Dental",
      description: "Professional website concept for a modern dental clinic, with services, booking information and clear contact details.",
      colors: ["#1a3450", "#0b1626"],
      demoUrl: "https://hassankhan307.github.io/dental-demo/",
      image: "assets/images/elan-dental.jpg"
    },
    {
      title: "Ziphyer",
      category: "ecommerce",
      categoryLabel: "Fashion / Shopify",
      description: "Live Shopify store built for a fashion retail client, covering storefront design, product setup and checkout.",
      colors: ["#3a2340", "#150c1c"],
      demoUrl: "https://www.ziphyer.com/",
      isDemo: false,
      image: "assets/images/ziphyer.jpg"
    },
    {
      title: "Ember & Olive",
      category: "restaurant",
      categoryLabel: "Restaurant",
      description: "Modern restaurant website concept with a digital menu, location details and reservation contact information.",
      colors: ["#452714", "#1c110a"],
      demoUrl: "https://hassankhan307.github.io/restaurant-demo/",
      image: "assets/images/namak-kitchen.jpg"
    },
    {
      title: "Studio Verve",
      category: "other",
      categoryLabel: "Interior Design",
      description: "Portfolio website concept for an interior design business, built around large project imagery and a simple inquiry form.",
      colors: ["#163049", "#0b1626"],
      demoUrl: "#"
    }
  ];

  /* Simple inline SVG icon per category, used as thumbnail art
     since real project screenshots aren't wired up yet. */
  const categoryIcons = {
    business: '<svg viewBox="0 0 64 64" fill="none"><rect x="10" y="14" width="44" height="36" rx="4" stroke="#22d3ee" stroke-width="2"/><path d="M10 24h44" stroke="#22d3ee" stroke-width="2"/><circle cx="17" cy="19" r="1.4" fill="#22d3ee"/><circle cx="22" cy="19" r="1.4" fill="#22d3ee"/></svg>',
    healthcare: '<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="20" stroke="#22d3ee" stroke-width="2"/><path d="M32 23v18M23 32h18" stroke="#22d3ee" stroke-width="2.4" stroke-linecap="round"/></svg>',
    ecommerce: '<svg viewBox="0 0 64 64" fill="none"><path d="M14 20h36l-4 22a5 5 0 0 1-5 4H23a5 5 0 0 1-5-4l-4-22Z" stroke="#22d3ee" stroke-width="2" stroke-linejoin="round"/><path d="M22 20v-5a10 10 0 0 1 20 0v5" stroke="#22d3ee" stroke-width="2"/></svg>',
    restaurant: '<svg viewBox="0 0 64 64" fill="none"><path d="M20 12v16a4 4 0 0 0 8 0V12M24 28v24" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/><path d="M42 12c-4 0-6 5-6 11s2 8 6 8v21" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    other: '<svg viewBox="0 0 64 64" fill="none"><rect x="12" y="12" width="18" height="18" rx="2" stroke="#22d3ee" stroke-width="2"/><rect x="34" y="12" width="18" height="18" rx="2" stroke="#22d3ee" stroke-width="2"/><rect x="23" y="34" width="18" height="18" rx="2" stroke="#22d3ee" stroke-width="2"/></svg>'
  };

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------- Navbar: scroll state + mobile menu ---------------- */
  const navbar = $("#navbar");
  const navToggle = $("#navToggle");
  const primaryNav = $("#primary-nav");

  function onScroll() {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
    toggleBackToTop();
    updateActiveNavLink();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("#primary-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- Active nav link on scroll ---------------- */
  const sections = $$("main section[id]");
  const navLinks = $$("#primary-nav .nav-link");

  function updateActiveNavLink() {
    let current = sections[0];
    const scrollPos = window.scrollY + 120;
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + current.id);
    });
  }

  /* ---------------- Back to top ---------------- */
  const backToTop = $("#backToTop");
  function toggleBackToTop() {
    backToTop.classList.toggle("is-visible", window.scrollY > 600);
  }
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  onScroll();

  /* ---------------- Scroll-reveal for sections (single, light effect) ---------------- */
  const revealTargets = $$(".service-card, .why__feature, .process__step");
  if ("IntersectionObserver" in window) {
    revealTargets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  /* ---------------- Portfolio: render, filter, modal ---------------- */
  const grid = $("#portfolioGrid");
  const filterBtns = $$(".filter-btn");
  const modal = $("#projectModal");
  const modalMedia = $("#modalMedia");
  const modalCategory = $("#modalCategory");
  const modalTitle = $("#modalTitle");
  const modalDesc = $("#modalDesc");
  const modalLink = $("#modalLink");

  function projectCardHTML(project, index) {
    const icon = categoryIcons[project.category] || categoryIcons.other;
    const isDemo = project.isDemo !== false;
    const badgeText = isDemo ? "Demo Concept" : "Live Client Project";
    const btnText = isDemo ? "View Demo" : "Visit Site";
    const media = project.image
      ? `<img src="${project.image}" alt="${project.title} screenshot" loading="lazy">`
      : icon;
    return `
      <article class="project-card" data-category="${project.category}" data-index="${index}"
        style="--thumb-a:${project.colors[0]};--thumb-b:${project.colors[1]}; animation-delay:${index * 0.06}s">
        <div class="project-card__thumb">
          <span class="project-card__badge${isDemo ? "" : " project-card__badge--live"}">${badgeText}</span>
          ${media}
        </div>
        <div class="project-card__body">
          <span class="project-card__category">${project.categoryLabel}</span>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          <button type="button" class="project-card__btn" data-preview="${index}">${btnText}</button>
        </div>
      </article>`;
  }

  function renderProjects(filter) {
    const items = projects.filter((p) => filter === "all" || p.category === filter);
    grid.innerHTML = items
      .map((p) => projectCardHTML(p, projects.indexOf(p)))
      .join("");
  }

  renderProjects("all");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      renderProjects(btn.dataset.filter);
    });
  });

  function openModal(index) {
    const project = projects[index];
    if (!project) return;
    modalMedia.style.setProperty("--thumb-a", project.colors[0]);
    modalMedia.style.setProperty("--thumb-b", project.colors[1]);
    modalMedia.innerHTML = project.image
      ? `<img src="${project.image}" alt="${project.title} screenshot">`
      : categoryIcons[project.category] || categoryIcons.other;
    const isDemo = project.isDemo !== false;
    modalCategory.textContent = project.categoryLabel + (isDemo ? " · Demo Concept" : " · Live Client Project");
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalLink.href = project.demoUrl;
    modalLink.textContent = isDemo ? "View Demo" : "Visit Site";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-preview]");
    if (btn) openModal(Number(btn.dataset.preview));
  });

  $$("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  /* ---------------- FAQ accordion ---------------- */
  $$(".faq-item__q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = $(".faq-item__a", item);
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      $$(".faq-item__q").forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          $(".faq-item__a", otherBtn.closest(".faq-item")).style.maxHeight = null;
        }
      });

      btn.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
    });
  });

  /* ---------------- Contact form validation ---------------- */
  const form = $("#contactForm");
  const formNote = $("#formNote");

  function validateField(field) {
    const wrapper = field.closest(".form-field");
    let valid = field.checkValidity();
    if (field.type === "email" && field.value.trim() !== "") {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
    }
    wrapper.classList.toggle("has-error", !valid);
    return valid;
  }

  const WHATSAPP_NUMBER = "923312901930";
  const CONTACT_EMAIL = "hassankhan.mhk11@gmail.com";

  function validateRequiredFields() {
    const requiredFields = $$("#fName, #fEmail, #fPhone, #fMessage", form);
    return requiredFields.map(validateField).every(Boolean);
  }

  function buildInquiryText() {
    const data = new FormData(form);
    const lines = [
      "New inquiry from HS Web Studio website:",
      "",
      `Name: ${data.get("name") || "-"}`,
      `Business: ${data.get("business") || "-"}`,
      `Email: ${data.get("email") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Business type: ${data.get("businessType") || "-"}`,
      `Needs: ${data.get("need") || "-"}`,
      "",
      `Message: ${data.get("message") || "-"}`
    ];
    return lines.join("\n");
  }

  /* Send via WhatsApp (form's default submit action) */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateRequiredFields()) {
      formNote.textContent = "Please check the highlighted fields.";
      formNote.style.color = "#f87171";
      return;
    }

    const text = encodeURIComponent(buildInquiryText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");

    formNote.textContent = "Opening WhatsApp with your message ready to send — just hit send there.";
    formNote.style.color = "";
    form.reset();
  });

  /* Send via Email */
  const emailSendBtn = $("#emailSendBtn");
  emailSendBtn.addEventListener("click", () => {
    if (!validateRequiredFields()) {
      formNote.textContent = "Please check the highlighted fields.";
      formNote.style.color = "#f87171";
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`Website inquiry from ${data.get("name") || "a visitor"}`);
    const body = encodeURIComponent(buildInquiryText());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    formNote.textContent = "Opening your email app with your message ready to send.";
    formNote.style.color = "";
  });

  requiredFieldsLiveValidation();
  function requiredFieldsLiveValidation() {
    $$("#fName, #fEmail, #fPhone, #fMessage", form).forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
    });
  }
})();
