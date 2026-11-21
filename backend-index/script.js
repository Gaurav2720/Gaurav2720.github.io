/* ==========================================================================
   Gaurav Bhaskar — Semester 5 Backend Index
   Small, dependency-free behaviours: reveal, progress, filter + search,
   mobile nav, back-to-top.
   ========================================================================== */
(() => {
  "use strict";

  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Reveal on scroll ---------- */
  const reveals = $$("[data-reveal]");

  if (reveals.length) {
    if ("IntersectionObserver" in window) {
      try {
        root.classList.add("reveal-on");

        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-in");
                io.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );

        reveals.forEach((el) => io.observe(el));
      } catch (err) {
        /* If anything fails, never leave content invisible. */
        root.classList.remove("reveal-on");
      }
    }
  }

  /* ---------- Scroll chrome: progress bar, header state, to-top ---------- */
  const progressBar = $("#scroll-progress");
  const header = $("#site-head");
  const toTop = $("#to-top");
  let queued = false;

  const syncScroll = () => {
    const top = window.scrollY || root.scrollTop || 0;
    const scrollable = root.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, top / scrollable)) : 0;

    if (progressBar) {
      progressBar.style.transform = `scaleX(${ratio})`;
    }
    if (header) {
      header.classList.toggle("is-scrolled", top > 8);
    }
    if (toTop) {
      toTop.classList.toggle("is-visible", top > 640);
    }

    queued = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!queued) {
        queued = true;
        window.requestAnimationFrame(syncScroll);
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", syncScroll, { passive: true });
  syncScroll();

  const prefersReduced = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReduced() ? "auto" : "smooth" });
  };

  toTop?.addEventListener("click", scrollToTop);
  $("#to-top-btn")?.addEventListener("click", scrollToTop);

  /* ---------- Index: filter + search ---------- */
  const rows = $$(".file-row");
  const filterButtons = $$(".filter");
  const searchInput = $("#file-search");
  const emptyState = $("#empty-state");
  const emptyText = $("#empty-text");
  const emptyReset = $("#empty-reset");
  const resultCount = $("#result-count");

  const total = rows.length;
  const state = { filter: "all", query: "" };

  const labels = {
    all: "all tracks",
    lab: "labs",
    theory: "theory",
    extra: "extras",
  };

  /* Keep the little counts in the filter buttons honest. */
  filterButtons.forEach((btn) => {
    const key = btn.dataset.filter;
    const badge = btn.querySelector(".count");
    if (!badge) return;
    const n =
      key === "all" ? total : rows.filter((r) => r.dataset.category === key).length;
    badge.textContent = String(n).padStart(2, "0");
  });

  const rowMatches = (row) => {
    const category = row.dataset.category || "";
    if (state.filter !== "all" && category !== state.filter) return false;
    if (!state.query) return true;

    const haystack = `${row.dataset.search || ""} ${row.textContent}`.toLowerCase();
    return haystack.includes(state.query);
  };

  const applyFilters = (announce = true) => {
    let visible = 0;

    rows.forEach((row) => {
      const show = rowMatches(row);
      row.hidden = !show;
      if (show) visible += 1;
    });

    filterButtons.forEach((btn) => {
      btn.setAttribute(
        "aria-pressed",
        String(btn.dataset.filter === state.filter)
      );
    });

    if (emptyState) emptyState.hidden = visible > 0;

    if (emptyText && visible === 0) {
      const track = labels[state.filter] || "this track";
      emptyText.textContent = state.query
        ? `Nothing in ${track} matches “${state.query}”. Try a shorter term.`
        : `No entries filed under ${track} yet.`;
    }

    if (resultCount && announce) {
      resultCount.textContent = `Showing ${visible} of ${total} entries`;
    }
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.filter = btn.dataset.filter || "all";
      applyFilters();
    });
  });

  searchInput?.addEventListener("input", () => {
    state.query = searchInput.value.trim().toLowerCase();
    applyFilters();
  });

  searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      state.query = "";
      applyFilters();
      searchInput.blur();
    }
  });

  emptyReset?.addEventListener("click", () => {
    state.filter = "all";
    state.query = "";
    if (searchInput) searchInput.value = "";
    applyFilters();
    filterButtons[0]?.focus();
  });

  /* "/" jumps to search, like every good index page. */
  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }
    const target = event.target;
    const typing =
      target instanceof HTMLElement &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable);
    if (typing || !searchInput) return;

    event.preventDefault();
    searchInput.focus();
    searchInput.select();
  });

  applyFilters(false);

  /* ---------- Mobile navigation ---------- */
  const menuButton = $("#menu-btn");
  const nav = $("#site-nav");

  const closeNav = () => {
    if (!nav || !menuButton) return;
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    nav?.classList.toggle("is-open", !isOpen);
  });

  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNav();
  });

  document.addEventListener("click", (event) => {
    if (!nav?.classList.contains("is-open")) return;
    if (event.target.closest("#site-nav") || event.target.closest("#menu-btn")) {
      return;
    }
    closeNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 820) closeNav();
    },
    { passive: true }
  );
})();
