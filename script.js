/**
 * GAURAV BHASKAR — BACKEND ENGINEERING JOURNAL CONTROLLER
 * Lightweight vanilla JS renderer: separate Lab, Theory, and PBL sections with filters and search.
 */

document.addEventListener("DOMContentLoaded", () => {
  const dataset = (window.EXPERIMENTS_DATA && Array.isArray(window.EXPERIMENTS_DATA))
    ? window.EXPERIMENTS_DATA
    : [];

  const labBlock = document.getElementById("lab-block");
  const theoryBlock = document.getElementById("theory-block");
  const labContainer = document.getElementById("lab-list");
  const theoryContainer = document.getElementById("theory-list");
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

  function matchesSearch(item, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    const matchTitle = item.title.toLowerCase().includes(q);
    const matchDesc = item.description.toLowerCase().includes(q);
    const matchFolder = (item.subCategory || "").toLowerCase().includes(q);
    const matchBadge = (item.categoryLabel || "").toLowerCase().includes(q);
    const matchTrack = (item.trackLabel || "").toLowerCase().includes(q);
    const matchTags = (item.tags || []).some((t) => t.toLowerCase().includes(q));
    return matchTitle || matchDesc || matchFolder || matchBadge || matchTrack || matchTags;
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

  function renderCards(items) {
    return items
      .map((item) => {
        const numStr = pad(item.num || 1);
        const tagsHtml = (item.tags || [])
          .map((t) => `<span class="tag">${esc(t)}</span>`)
          .join("");
        const folderPath = item.subCategory
          ? `<code class="lab-card__path">${esc(item.subCategory)}</code>`
          : "";
        const reportHref = item.report || `report.html#${esc(item.id)}`;
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
  }

  // Render separated Lab and Theory sections
  function render() {
    if (!labContainer || !theoryContainer) return;

    const filtered = dataset.filter(
      (item) => matchesFilter(item, activeCategory) && matchesSearch(item, searchQuery)
    );

    const labItems = filtered.filter((item) => (item.track || "LAB") === "LAB");
    const theoryItems = filtered.filter((item) => item.track === "THEORY");
    const pblItems = filtered.filter((item) => item.track === "PBL");

    // If user explicitly filters to PBL, show PBL card in labContainer or scroll to #pbl
    const showLab = labItems.length > 0;
    const showTheory = theoryItems.length > 0;
    const showPblInGrid = activeCategory === "PBL" && pblItems.length > 0;

    if (labBlock) labBlock.hidden = !showLab && !showPblInGrid;
    if (theoryBlock) theoryBlock.hidden = !showTheory;

    if (showPblInGrid) {
      labContainer.innerHTML = renderCards(pblItems);
      const labHeading = labBlock ? labBlock.querySelector(".track-section__title") : null;
      if (labHeading) labHeading.dataset.original = labHeading.textContent;
      if (labHeading) labHeading.textContent = "PBL — Project-Based Learning";
    } else {
      const labHeading = labBlock ? labBlock.querySelector(".track-section__title") : null;
      if (labHeading && labHeading.dataset.original) {
        labHeading.textContent = labHeading.dataset.original;
      }
      labContainer.innerHTML = renderCards(labItems);
    }

    theoryContainer.innerHTML = renderCards(theoryItems);

    labContainer.setAttribute("aria-busy", "false");
    theoryContainer.setAttribute("aria-busy", "false");

    const totalShown = labItems.length + theoryItems.length + (showPblInGrid ? pblItems.length : 0);
    if (emptyState) emptyState.hidden = totalShown > 0;
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
