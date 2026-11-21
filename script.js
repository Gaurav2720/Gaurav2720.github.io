/**
 * GAURAV BHASKAR — BACKEND ENGINEERING JOURNAL CONTROLLER
 * Lightweight, fast, vanilla JS renderer and live filter.
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

  // Update category counters
  function updateCounters() {
    const total = dataset.length;
    const labCount = dataset.filter(item => item.category === "LAB").length;
    const theoryCount = dataset.filter(item => item.category === "THEORY").length;
    const systemsCount = dataset.filter(item => item.category === "SYSTEMS").length;

    if (countAll) countAll.textContent = total;
    if (countLab) countLab.textContent = labCount;
    if (countTheory) countTheory.textContent = theoryCount;
    if (countSystems) countSystems.textContent = systemsCount;
  }

  // Render cards
  function render() {
    if (!listContainer) return;

    const filtered = dataset.filter(item => {
      const matchCat = activeCategory === "ALL" || item.category === activeCategory;
      if (!matchCat) return false;

      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchFolder = (item.subCategory || "").toLowerCase().includes(q);
      const matchBadge = (item.categoryLabel || "").toLowerCase().includes(q);
      const matchTags = (item.tags || []).some(t => t.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchFolder || matchBadge || matchTags;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = "";
      if (emptyState) emptyState.style.display = "flex";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    listContainer.innerHTML = filtered.map((item, index) => {
      const numStr = (item.id || (index + 1)) < 10 ? `0${item.id || (index + 1)}` : `${item.id || (index + 1)}`;
      const tagsHtml = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
      const folderPath = item.subCategory ? `<span class="card-folder">${item.subCategory}</span>` : "";

      return `
        <article class="experiment-card" data-category="${item.category}">
          <div class="card-top">
            <div class="card-meta">
              <span class="card-number">#${numStr}</span>
              <span class="card-badge">${item.categoryLabel || item.category}</span>
              ${folderPath}
            </div>
          </div>

          <h2 class="card-title">${item.title}</h2>
          <p class="card-desc">${item.description}</p>

          <div class="card-bottom">
            <div class="tag-list">
              ${tagsHtml}
            </div>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="card-link">
              <span>View Folder</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </article>
      `;
    }).join("");
  }

  // Filter tabs click
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => {
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
      filterTabs.forEach(t => {
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
