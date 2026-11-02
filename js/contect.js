// Configure Tailwind Custom Theme
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-error": "#ffffff",
        "on-surface": "#0d1c2e",
        "on-tertiary-fixed-variant": "#004b73",
        "surface-container-high": "#dce9ff",
        "on-secondary-fixed-variant": "#005137",
        "on-primary-container": "#76849f",
        "tertiary-fixed-dim": "#93ccff",
        "on-tertiary-container": "#188ace",
        "primary": "#000000",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "secondary": "#006c4a",
        "surface-tint": "#515f78",
        "on-background": "#0d1c2e",
        "primary-fixed-dim": "#b9c7e4",
        "inverse-surface": "#233144",
        "surface-bright": "#f8f9ff",
        "inverse-primary": "#b9c7e4",
        "inverse-on-surface": "#eaf1ff",
        "background": "#f8f9ff",
        "surface-variant": "#d5e3fc",
        "outline-variant": "#c5c6cd",
        "surface-container-lowest": "#ffffff",
        "tertiary-container": "#001d31",
        "surface": "#f8f9ff",
        "on-secondary": "#ffffff",
        "secondary-fixed": "#85f8c4",
        "secondary-container": "#82f5c1",
        "secondary-fixed-dim": "#68dba9",
        "on-secondary-fixed": "#002114",
        "on-primary-fixed": "#0d1c32",
        "surface-dim": "#ccdbf3",
        "on-tertiary-fixed": "#001d31",
        "on-surface-variant": "#44474d",
        "error-container": "#ffdad6",
        "tertiary": "#000000",
        "outline": "#75777e",
        "surface-container-highest": "#d5e3fc",
        "error": "#ba1a1a",
        "on-secondary-container": "#00714e",
        "primary-container": "#0d1c32",
        "surface-container-low": "#eff4ff",
        "on-error-container": "#93000a",
        "tertiary-fixed": "#cce5ff",
        "primary-fixed": "#d6e3ff",
        "surface-container": "#e6eeff",
        "on-primary-fixed-variant": "#39475f"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "spacing-sm": "0.75rem",
        "margin-mobile": "1rem",
        "gutter": "1.5rem",
        "spacing-xs": "0.5rem",
        "spacing-lg": "1.5rem",
        "spacing-md": "1rem",
        "spacing-xl": "2rem",
        "spacing-3xl": "4rem",
        "spacing-2xl": "3rem",
        "margin-desktop": "2rem",
        "spacing-2xs": "0.25rem"
      },
      fontFamily: {
        "headline-sm": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "body-lg": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "body-sm": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "label-md": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "headline-md": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "numeric-stat": ["Plus Jakarta Sans", "Noto Sans Lao"],
        "headline-xl": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "body-md": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "display-lg": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "label-sm": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "display-lg-mobile": ["Noto Sans Lao", "Plus Jakarta Sans"],
        "headline-xl-mobile": ["Noto Sans Lao", "Plus Jakarta Sans"]
      },
      fontSize: {
        "headline-sm": ["18px", { lineHeight: "26px", letterSpacing: "-0.005em", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "label-md": ["13px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "600" }],
        "headline-md": ["22px", { lineHeight: "30px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "numeric-stat": ["28px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-xl": ["32px", { lineHeight: "40px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-sm": ["11px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }],
        "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-xl-mobile": ["26px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "700" }]
      }
    }
  }
};

// Interactive Form and UI Logic
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactInquiryForm');
  const toast = document.getElementById('formSuccessToast');
  const refCode = document.getElementById('refCode');
  const submitBtn = document.getElementById('submitBtn');

  if (form && toast) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Generate random reference code
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      if (refCode) {
        refCode.textContent = randomNum;
      }

      // Disable button during simulated submission
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">progress_activity</span> ກຳລັງສົ່ງຂໍ້ມູນ...';

      setTimeout(function() {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        submitBtn.innerHTML = originalBtnHtml;

        // Reveal success toast
        toast.classList.remove('hidden');
        toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Reset form fields
        form.reset();
      }, 800);
    });
  }

  // Active Navigation Highlighting for Contact Us tab
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(function(link) {
    if (link.getAttribute('data-path') === 'contact-us') {
      link.classList.add('text-secondary', 'border-b-2', 'border-secondary', 'font-headline-sm');
      link.classList.remove('text-on-surface-variant', 'border-transparent');
    }
  });
});