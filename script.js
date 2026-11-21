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

  const countAll = document.getElementById("count-all");
  const countLab = document.getElementById("count-lab");
  const countTheory = document.getElementById("count-theory");
  const countSystems = document.getElementById("count-systems");

  let activeCategory = "ALL";
  let searchQuery = "";

  const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

  // Update category counters
  function updateCounters() {
    const total = dataset.length;
    const labCount = dataset.filter((item) => item.category === "LAB").length;
    const theoryCount = dataset.filter((item) => item.category === "THEORY").length;
    const systemsCount = dataset.filter((item) => item.category === "SYSTEMS").length;

    if (countAll) countAll.textContent = pad(total);
    if (countLab) countLab.textContent = pad(labCount);
    if (countTheory) countTheory.textContent = pad(theoryCount);
    if (countSystems) countSystems.textContent = pad(systemsCount);
  }

  // Escape user-facing strings inserted as HTML
  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Render cards
  function render() {
    if (!listContainer) return;

    const filtered = dataset.filter((item) => {
      const matchCat = activeCategory === "ALL" || item.category === activeCategory;
      if (!matchCat) return false;

      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchFolder = (item.subCategory || "").toLowerCase().includes(q);
      const matchBadge = (item.categoryLabel || "").toLowerCase().includes(q);
      const matchTags = (item.tags || []).some((t) => t.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchFolder || matchBadge || matchTags;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = "";
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

        return `
        <article class="lab-card" data-category="${esc(item.category)}">
          <div class="lab-card__head">
            <span class="lab-card__num">${numStr}</span>
            <span class="lab-card__badge">${esc(item.categoryLabel || item.category)}</span>
          </div>

          <h3 class="lab-card__title">${esc(item.title)}</h3>
          <p class="lab-card__desc">${esc(item.description)}</p>
          ${folderPath}

          <div class="lab-card__tags">${tagsHtml}</div>

          <div class="lab-card__actions">
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">
              View Folder <span aria-hidden="true">&#8599;</span>
            </a>
            <a href="${reportHref}" class="btn btn--solid">
              Report <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </article>`;
      })
      .join("");
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
