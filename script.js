/**
 * GAURAV'S BACKEND JOURNEY — CORE SCRIPT
 * Minimal, technical journal engine with dynamic data binding,
 * category filtering, real-time statistics, and smooth navigation.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. References & State
  const experimentsList = document.getElementById("experiments-list");
  const emptyState = document.getElementById("empty-state");
  const filterPills = document.querySelectorAll(".filter-pill");
  const searchInput = document.getElementById("experiment-search");
  const resetFilterBtn = document.getElementById("reset-filter-btn");

  // Dynamic statistics elements
  const statTotal = document.getElementById("stat-total");
  const statLab = document.getElementById("stat-lab");
  const statTheory = document.getElementById("stat-theory");
  const statProjects = document.getElementById("stat-projects");

  // Category pill counter badges
  const pillCountAll = document.getElementById("pill-count-all");
  const pillCountLab = document.getElementById("pill-count-lab");
  const pillCountTheory = document.getElementById("pill-count-theory");
  const pillCountProjects = document.getElementById("pill-count-projects");

  // Nav elements
  const siteHeader = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navLabLink = document.getElementById("nav-lab-link");
  const navTheoryLink = document.getElementById("nav-theory-link");

  // Copy Clone elements
  const copyCloneBtn = document.getElementById("copy-clone-btn");
  const toastNotice = document.getElementById("toast-notice");

  let activeCategory = "ALL";
  let searchQuery = "";

  // Verify dataset availability
  const dataset = (window.EXPERIMENTS_DATA && Array.isArray(window.EXPERIMENTS_DATA)) 
    ? window.EXPERIMENTS_DATA 
    : [];

  // --------------------------------------------------------------------------
  // 2. Metrics & Dynamic Statistics Calculation
  // --------------------------------------------------------------------------
  function calculateMetrics() {
    const total = dataset.length;
    const labCount = dataset.filter(item => item.category.toUpperCase() === "LAB").length;
    const theoryCount = dataset.filter(item => item.category.toUpperCase() === "THEORY").length;
    const projectsCount = dataset.filter(item => item.category.toUpperCase() === "PROJECTS").length;

    // Pad single digits for crisp technical display (e.g. 08, 04)
    const formatNumber = (num, addPlus = false) => {
      const padded = num < 10 ? `0${num}` : `${num}`;
      return addPlus && num >= 10 ? `${padded}+` : padded;
    };

    if (statTotal) statTotal.textContent = formatNumber(total, true);
    if (statLab) statLab.textContent = formatNumber(labCount);
    if (statTheory) statTheory.textContent = formatNumber(theoryCount);
    if (statProjects) statProjects.textContent = formatNumber(projectsCount);

    if (pillCountAll) pillCountAll.textContent = total;
    if (pillCountLab) pillCountLab.textContent = labCount;
    if (pillCountTheory) pillCountTheory.textContent = theoryCount;
    if (pillCountProjects) pillCountProjects.textContent = projectsCount;
  }

  // --------------------------------------------------------------------------
  // 3. Render Experiment Rows
  // --------------------------------------------------------------------------
  function renderExperiments() {
    if (!experimentsList) return;

    // Filter by category and search input
    const filtered = dataset.filter(item => {
      const matchesCategory = activeCategory === "ALL" || item.category.toUpperCase() === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchSub = (item.subCategory || "").toLowerCase().includes(q);
      const matchTags = (item.tags || []).some(t => t.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchSub || matchTags;
    });

    // Handle empty state
    if (filtered.length === 0) {
      experimentsList.innerHTML = "";
      if (emptyState) emptyState.style.display = "flex";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    // Build row markup
    const html = filtered.map((item, index) => {
      const serialNum = (item.id || (index + 1)) < 10 
        ? `0${item.id || (index + 1)}` 
        : `${item.id || (index + 1)}`;
      
      const tagsHtml = (item.tags && item.tags.length > 0)
        ? `<div class="exp-tags-row">${item.tags.slice(0, 3).map(tag => `<span class="exp-tag">${escapeHtml(tag)}</span>`).join("")}</div>`
        : "";

      return `
        <a 
          href="${escapeHtml(item.link || '#')}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="experiment-row"
          aria-label="${escapeHtml(item.title)} - ${escapeHtml(item.category)}"
        >
          <div class="exp-num">${serialNum}</div>
          
          <div class="exp-info">
            <h3 class="exp-title">${escapeHtml(item.title)}</h3>
            <div class="exp-meta">
              <span class="exp-category-tag">${escapeHtml(item.category)}</span>
              <span class="exp-dot-sep">·</span>
              <span class="exp-subcategory">${escapeHtml(item.subCategory || "General")}</span>
            </div>
          </div>

          <div class="exp-desc-wrap">
            <p>${escapeHtml(item.description)}</p>
            ${tagsHtml}
          </div>

          <div class="exp-action">
            <span class="exp-btn-view">
              VIEW <span class="exp-arrow">→</span>
            </span>
          </div>
        </a>
      `;
    }).join("");

    experimentsList.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // 4. Filtering & Search Event Listeners
  // --------------------------------------------------------------------------
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });

      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");
      activeCategory = pill.dataset.category || "ALL";

      renderExperiments();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderExperiments();
    });
  }

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
      activeCategory = "ALL";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      filterPills.forEach(p => {
        p.classList.toggle("active", p.dataset.category === "ALL");
        p.setAttribute("aria-selected", p.dataset.category === "ALL");
      });
      renderExperiments();
    });
  }

  // Nav link direct category triggers (Lab & Theory in nav)
  if (navLabLink) {
    navLabLink.addEventListener("click", () => {
      setCategoryFilter("LAB");
    });
  }

  if (navTheoryLink) {
    navTheoryLink.addEventListener("click", () => {
      setCategoryFilter("THEORY");
    });
  }

  function setCategoryFilter(category) {
    activeCategory = category;
    filterPills.forEach(p => {
      const match = p.dataset.category === category;
      p.classList.toggle("active", match);
      p.setAttribute("aria-selected", match);
    });
    renderExperiments();
  }

  // --------------------------------------------------------------------------
  // 5. Sticky Navigation & Scroll Spy
  // --------------------------------------------------------------------------
  window.addEventListener("scroll", () => {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }, { passive: true });

  // Scroll Spy for highlighting current section
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("active");
          } else if (id === "hero" && href === "#hero") {
            link.classList.remove("active");
          } else if (href !== `#${id}`) {
            link.classList.remove("active");
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -70% 0px"
  });

  sections.forEach(sec => observer.observe(sec));

  // --------------------------------------------------------------------------
  // 6. Mobile Navigation Toggle
  // --------------------------------------------------------------------------
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("mobile-open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Clone Command Copy Functionality
  // --------------------------------------------------------------------------
  if (copyCloneBtn) {
    copyCloneBtn.addEventListener("click", async () => {
      const cloneText = "git clone https://github.com/Gaurav2720/Backend.git";
      try {
        await navigator.clipboard.writeText(cloneText);
        showToast("✓ Copied git clone command to clipboard");
        
        const label = copyCloneBtn.querySelector(".copy-label");
        if (label) {
          const orig = label.textContent;
          label.textContent = "Copied!";
          setTimeout(() => {
            label.textContent = orig;
          }, 2000);
        }
      } catch (err) {
        showToast("Press Ctrl+C to copy command");
      }
    });
  }

  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.textContent = message;
    toastNotice.classList.add("show");
    setTimeout(() => {
      toastNotice.classList.remove("show");
    }, 2800);
  }

  // --------------------------------------------------------------------------
  // 8. Utility & Init
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --------------------------------------------------------------------------
  // 8. Dynamic Portrait Parallax & Optical Zoom Interaction
  // --------------------------------------------------------------------------
  const photoCardWrapper = document.querySelector(".photo-card-wrapper");
  const photoFrame = document.querySelector(".photo-frame");

  if (photoCardWrapper && photoFrame) {
    let rafId = null;

    photoCardWrapper.addEventListener("mousemove", (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = photoCardWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle 3D dynamic tilt responding to mouse position
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        photoFrame.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
      });
    });

    photoCardWrapper.addEventListener("mouseleave", () => {
      if (rafId) cancelAnimationFrame(rafId);
      photoFrame.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  }

  // Initialize UI
  calculateMetrics();
  renderExperiments();
});
