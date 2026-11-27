/**
 * GAURAV BHASKAR — BACKEND ENGINEERING JOURNAL CONTROLLER
 * Lightweight vanilla JS renderer: filters, live search, and report actions.
 */

document.addEventListener("DOMContentLoaded", () => {
  const dataset = (window.EXPERIMENTS_DATA && Array.isArray(window.EXPERIMENTS_DATA))
    ? window.EXPERIMENTS_DATA
    : [];

  const listContainer = document.getElementById("experiments-list");
  const searchInput = document.getElementById("search-input");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const emptyState = document.getElementById("empty-state");
  const resetBtn = document.getElementById("reset-filter-btn");

  let activeCategory = "ALL";
  let searchQuery = "";

  const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

  function matchesFilter(item, filter) {
    if (filter === "ALL") return true;
    if (filter === "LAB" || filter === "THEORY" || filter === "PBL") {
      return (item.track || "LAB") === filter;
    }
    return item.category === filter;
  }

  // Update each filter tab's counter from the dataset
  function updateCounters() {
    filterTabs.forEach((tab) => {
      const category = tab.getAttribute("data-category") || "ALL";
      const total = dataset.filter((item) => matchesFilter(item, category)).length;
      const counter = tab.querySelector(".tab-count");
      if (counter) counter.textContent = pad(total);
    });
  }

  // Escape user-facing strings inserted as HTML
  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTrackBadge(track) {
    if (track === "THEORY") {
      return `<span class="lab-card__track lab-card__track--theory">Theory Work</span>`;
    }
    if (track === "PBL") {
      return `<span class="lab-card__track lab-card__track--pbl">PBL Activity</span>`;
    }
    return `<span class="lab-card__track lab-card__track--lab">Lab Practical</span>`;
  }

  // Render cards
  function render() {
    if (!listContainer) return;

    const filtered = dataset.filter((item) => {
      if (!matchesFilter(item, activeCategory)) return false;

      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchFolder = (item.subCategory || "").toLowerCase().includes(q);
      const matchBadge = (item.categoryLabel || "").toLowerCase().includes(q);
      const matchTrack = (item.trackLabel || "").toLowerCase().includes(q);
      const matchTags = (item.tags || []).some((t) => t.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchFolder || matchBadge || matchTrack || matchTags;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = "";
      listContainer.setAttribute("aria-busy", "false");
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;

    listContainer.innerHTML = filtered
      .map((item) => {
        const numStr = pad(item.id);
        const tagsHtml = (item.tags || [])
          .map((t) => `<span class="tag">${esc(t)}</span>`)
          .join("");
        const folderPath = item.subCategory
          ? `<code class="lab-card__path">${esc(item.subCategory)}</code>`
          : "";
        const reportHref = item.report || `report.html#lab-${item.id}`;
        const track = item.track || "LAB";
        const trackTag = renderTrackBadge(track);

        return `
        <article class="lab-card" data-category="${esc(item.category)}" data-track="${esc(track)}">
          <div class="lab-card__head">
            <span class="lab-card__num">${numStr}</span>
            <div class="lab-card__badges">
              ${trackTag}
              <span class="lab-card__badge">${esc(item.categoryLabel || item.category)}</span>
            </div>
          </div>

          <h3 class="lab-card__title">${esc(item.title)}</h3>
          <p class="lab-card__desc">${esc(item.description)}</p>
          ${folderPath}

          <div class="lab-card__tags">${tagsHtml}</div>

          <div class="lab-card__actions">
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">
              Code <span aria-hidden="true">&#8599;</span>
            </a>
            <a href="${reportHref}" class="btn btn--solid">
              Report <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </article>`;
      })
      .join("");

    listContainer.setAttribute("aria-busy", "false");
  }

  // Filter tabs
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeCategory = tab.getAttribute("data-category") || "ALL";
      render();
    });
  });

  // Live search
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      render();
    });
  }

  // Reset filters
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      activeCategory = "ALL";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      filterTabs.forEach((t) => {
        const isAll = t.getAttribute("data-category") === "ALL";
        t.classList.toggle("active", isAll);
        t.setAttribute("aria-selected", isAll ? "true" : "false");
      });
      render();
    });
  }

  // Initialize
  updateCounters();
  render();
});
