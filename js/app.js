
/* =========================================================
   Saythala Documents Page
   JavaScript: search, filters, FAQ, modals, mobile menu
   ========================================================= */

(() => {
  "use strict";

  const state = {
    category: "all"
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const elements = {
    search: $("#doc-search-input"),
    clearSearch: $("#doc-clear-btn"),
    countLabel: $("#doc-count-label"),
    noResults: $("#no-results-state"),
    previewModal: $("#preview-modal"),
    guideModal: $("#guide-modal"),
    mobileMenu: $("#mobile-menu"),
    mobileMenuToggle: $(".mobile-menu-toggle")
  };

  function updateFilterButtonStyles(activeButton) {
    $$(".filter-tab-btn").forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle("bg-primary-container", isActive);
      button.classList.toggle("text-on-primary", isActive);
      button.classList.toggle("font-semibold", isActive);
      button.classList.toggle("shadow-sm", isActive);

      button.classList.toggle("bg-surface-container-low", !isActive);
      button.classList.toggle("text-on-surface-variant", !isActive);
      button.classList.toggle("font-medium", !isActive);
    });
  }

  function filterDocs() {
    const query = (elements.search?.value || "").trim().toLowerCase();
    const cards = $$(".doc-card");
    const sections = $$(".doc-section");

    let visibleCount = 0;

    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const title = (card.dataset.title || "").toLowerCase();
      const content = (card.innerText || "").toLowerCase();

      const matchesCategory =
        state.category === "all" || category === state.category;

      const matchesQuery =
        !query || title.includes(query) || content.includes(query);

      const visible = matchesCategory && matchesQuery;

      card.classList.toggle("hidden", !visible);

      if (visible) visibleCount += 1;
    });

    sections.forEach((section) => {
      const hasVisibleCard = !!$(".doc-card:not(.hidden)", section);
      section.classList.toggle("hidden", !hasVisibleCard);
    });

    elements.noResults?.classList.toggle("hidden", visibleCount > 0);

    if (elements.countLabel) {
      elements.countLabel.textContent =
        `ສະແດງເອກະສານ ${visibleCount} ສະບັບ • ອັບເດດລ່າສຸດ ຕຸລາ 2026`;
    }
  }

  function setModalOpen(modal, open) {
    if (!modal) return;

    modal.classList.toggle("hidden", !open);
    modal.classList.toggle("flex", open);
    document.body.classList.toggle(
      "modal-open",
      !!$("#preview-modal.flex, #guide-modal.flex")
    );
  }

  function openPreviewModal(title, subtitle, type, documentUrl = "") {
    $("#modal-doc-title")?.replaceChildren(document.createTextNode(title));
    $("#modal-doc-sub")?.replaceChildren(document.createTextNode(subtitle));
    $("#modal-doc-type")?.replaceChildren(document.createTextNode(type));

    const preview = $("#modal-doc-preview");
    const unavailableMessage = $("#modal-doc-unavailable");
    const downloadLink = $("#modal-doc-download");
    const hasDocument = Boolean(documentUrl && documentUrl !== "#");

    if (preview) {
      if (hasDocument) {
        preview.src = documentUrl;
      } else {
        preview.removeAttribute("src");
      }
      preview.classList.toggle("hidden", !hasDocument);
    }

    unavailableMessage?.classList.toggle("hidden", hasDocument);

    if (downloadLink) {
      if (hasDocument) {
        downloadLink.href = documentUrl;
      }
      downloadLink.classList.toggle("hidden", !hasDocument);
    }

    setModalOpen(elements.previewModal, true);
  }

  function closePreviewModal() {
    $("#modal-doc-preview")?.removeAttribute("src");
    setModalOpen(elements.previewModal, false);
  }

  function openGuideModal() {
    setModalOpen(elements.guideModal, true);
  }

  function closeGuideModal() {
    setModalOpen(elements.guideModal, false);
  }

  function closeAllModals() {
    closePreviewModal();
    closeGuideModal();
  }

  function initSearchAndFilters() {
    elements.search?.addEventListener("input", filterDocs);

    elements.clearSearch?.addEventListener("click", () => {
      if (!elements.search) return;
      elements.search.value = "";
      elements.search.focus();
      filterDocs();
    });

    $$(".filter-tab-btn").forEach((button) => {
      button.addEventListener("click", () => {
        state.category = button.dataset.category || "all";
        updateFilterButtonStyles(button);
        filterDocs();
      });
    });

    filterDocs();
  }

  function initFaq() {
    $$(".faq-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const content = trigger.nextElementSibling;
        const icon = $(".faq-icon", trigger);
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";

        $$(".faq-trigger").forEach((other) => {
          if (other === trigger) return;

          other.setAttribute("aria-expanded", "false");
          other.nextElementSibling?.classList.add("hidden");

          const otherIcon = $(".faq-icon", other);
          if (otherIcon) otherIcon.textContent = "expand_more";
        });

        trigger.setAttribute("aria-expanded", String(!isExpanded));
        content?.classList.toggle("hidden", isExpanded);

        if (icon) {
          icon.textContent = isExpanded ? "expand_more" : "expand_less";
        }
      });
    });
  }

  function initModals() {
    $$('[data-action="preview-document"]').forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest(".doc-card");
        if (!card) return;

        const title = $("h3", card)?.innerText || "ເອກະສານ";
        const meta = card.querySelector(".bg-surface-container-low")?.innerText || "";
        const type = card.querySelector(".inline-flex")?.innerText?.split("•")[0]?.trim() || "PDF";
        const downloadLink = $('[download]', card);
        const documentUrl = downloadLink?.getAttribute("href") || "";

        openPreviewModal(title, meta, type, documentUrl);
      });
    });

    $$('[data-action="open-guide"]').forEach((button) => {
      button.addEventListener("click", openGuideModal);
    });

    $$('[data-action="close-preview"]').forEach((button) => {
      button.addEventListener("click", closePreviewModal);
    });

    $$('[data-action="close-guide"]').forEach((button) => {
      button.addEventListener("click", closeGuideModal);
    });

    elements.previewModal?.addEventListener("click", (event) => {
      if (event.target === elements.previewModal) closePreviewModal();
    });

    elements.guideModal?.addEventListener("click", (event) => {
      if (event.target === elements.guideModal) closeGuideModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeAllModals();
    });
  }

  function initMobileMenu() {
    const toggle = elements.mobileMenuToggle;
    const menu = elements.mobileMenu;

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isOpen));
      menu.hidden = isOpen;
      menu.classList.toggle("is-open", !isOpen);

      const icon = $(".material-symbols-outlined", toggle);
      if (icon) icon.textContent = isOpen ? "menu" : "close";
    });

    $$(".mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        menu.hidden = true;
        menu.classList.remove("is-open");

        const icon = $(".material-symbols-outlined", toggle);
        if (icon) icon.textContent = "menu";
      });
    });
  }

  // Public compatibility API for any future page integration.
  window.SaythalaDocs = {
    filterDocs,
    openPreviewModal,
    closePreviewModal,
    openGuideModal,
    closeGuideModal
  };

  document.addEventListener("DOMContentLoaded", () => {
    initSearchAndFilters();
    initFaq();
    initModals();
    initMobileMenu();
  });
})();
