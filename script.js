/**
 * DA VINCI CODEX ENGINE
 * Gaurav's Backend Journey - Portfolio & Course Index
 */

// --- 1. Course Index Data (Curated from Semester 5 Backend Workspace) ---
const courseData = [
  {
    id: "theory-1",
    type: "theory",
    badge: "Theory Folio I",
    title: "Class 1: Express Server & Modular Routing",
    date: "Semester 5 • Aug 2024",
    summary: "Architectural initialization of Node.js Express server. Implementing structured route separation, task endpoints, and JSON response lifecycle.",
    tags: ["Node.js", "Express.js", "Routing", "HTTP GET/POST"],
    githubPath: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/Class1",
    details: {
      objective: "Lay the groundwork for scalable Express middleware architectures, handling multi-path routes and asynchronous request handlers.",
      keyConcepts: [
        "Express application instantiation and port binding",
        "Middleware chaining and parameter extraction (req.params, req.query)",
        "Modular folder architecture separating route handlers from business logic"
      ],
      codeSnippet: `// Express Foundation Demo
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'active', codex: 'v1.0' });
});

app.listen(PORT, () => {
  console.log(\`[DaVinci Server] Listening on port \${PORT}\`);
});`
    }
  },
  {
    id: "theory-2",
    type: "theory",
    badge: "Theory Folio II",
    title: "Class 2: DevTools Diagnostics & Postman Workflows",
    date: "Semester 5 • Aug 2024",
    summary: "Deep-dive into browser network inspections, HTTP header mechanics, payload sniffing, and automated API testing with Postman collections.",
    tags: ["Postman", "DevTools", "HTTP Headers", "API Testing"],
    githubPath: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/Class2",
    details: {
      objective: "Master API debugging, request crafting, latency analysis, and status code verification across complex client-server exchanges.",
      keyConcepts: [
        "Network tab analysis: Waterfall charts, TTFB, and response headers",
        "Postman environment variables, pre-request scripts, and test suites",
        "Idempotency: GET, PUT, DELETE vs non-idempotent POST operations"
      ],
      codeSnippet: `// Postman Test Script Verification
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is under 150ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(150);
});`
    }
  },
  {
    id: "theory-3",
    type: "theory",
    badge: "Theory Folio III",
    title: "Class 3: Python Backend & Virtual Environments",
    date: "Semester 5 • Sep 2024",
    summary: "Python backend setup featuring isolated venv environments, WSGI/ASGI paradigms, script modularity, and lightweight endpoint handlers.",
    tags: ["Python 3", "Venv", "ASGI", "Scripting"],
    githubPath: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/class3",
    details: {
      objective: "Establish production-grade Python virtual environments and evaluate execution differences between synchronous WSGI and modern ASGI pipelines.",
      keyConcepts: [
        "Python venv isolation and dependency lockfiles (requirements.txt)",
        "Executing dual script workflows (main.py, main2.py)",
        "Cross-language backend comparison: Node event loop vs Python thread pool"
      ],
      codeSnippet: `# Python Backend Ingress
import sys

def init_service():
    print(f"[Python Codex] Python Runtime: {sys.version.split()[0]}")
    # Initialize service pipeline
    return {"status": "initialized", "protocol": "HTTP/1.1"}

if __name__ == "__main__":
    init_service()`
    }
  },
  {
    id: "theory-4",
    type: "theory",
    badge: "Theory Folio IV",
    title: "Class 4: Advanced Python Endpoints & Data Transformation",
    date: "Semester 5 • Sep 2024",
    summary: "Constructing robust endpoint logic in Python with parameterized inputs, data structuring, and backend validation mechanisms.",
    tags: ["Python", "Data Processing", "JSON Serialization", "APIs"],
    githubPath: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/class4",
    details: {
      objective: "Implement structured API routing and data payload transformation in Python with rigorous error handling.",
      keyConcepts: [
        "Parsing dynamic parameters and payload validation",
        "Stream processing and JSON serialization overhead",
        "Modular separation between API contracts and execution logic"
      ],
      codeSnippet: `# Advanced Endpoint Processor
from typing import Dict, Any

def process_payload(payload: Dict[str, Any]) -> Dict[str, Any]:
    if not payload.get("data"):
        raise ValueError("Empty transmission")
    transformed = [item.strip().upper() for item in payload["data"]]
    return {"count": len(transformed), "result": transformed}`
    }
  },
  {
    id: "theory-5",
    type: "theory",
    badge: "Theory Folio V",
    title: "Class 5: Express Sessions & Cookie Authentication",
    date: "Semester 5 • Sep 2024",
    summary: "Stateful user sessions using express-session, cryptographic cookie signing, session stores, and authorized route protection.",
    tags: ["Express-session", "Cookies", "Auth", "Security"],
    githubPath: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/class5",
    details: {
      objective: "Bridge the stateless nature of HTTP through cryptographic session state management and secured cookie policies.",
      keyConcepts: [
        "Session ID signing with HMAC-SHA256 secret keys",
        "Cookie attributes: HttpOnly, Secure, SameSite prevention against XSS/CSRF",
        "Protected endpoint middleware: validating req.session.user"
      ],
      codeSnippet: `const session = require('express-session');

app.use(session({
  secret: 'davinci_secret_ink_key',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // set true in HTTPS production
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1 hour
  }
}));`
    }
  },
  {
    id: "lab-1",
    type: "lab",
    badge: "Laboratory Exp I",
    title: "Lab 1: Web Protocols & Structured Technical Reports",
    date: "Semester 5 • Practical",
    summary: "In-depth experimental investigation into HTTP protocols, client rendering, structured analytical reporting, and DOM/Network transactions.",
    tags: ["Protocols", "HTML5", "Documentation", "RFC Standards"],
    githubPath: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/lab/lAB1",
    details: {
      objective: "Empirically document web communication lifecycles, HTTP request/response sequences, and compile reproducible lab reports.",
      keyConcepts: [
        "HTTP Methods and status codes mapping (2xx, 3xx, 4xx, 5xx)",
        "MIME type negotiations (Accept, Content-Type)",
        "Formal scientific Markdown/HTML reporting standards"
      ],
      codeSnippet: `<!-- Experiment 1 Observation Protocol -->
<section class="experiment-dossier">
  <h2>Experiment 1: HTTP Client-Server Exchange</h2>
  <p>Status: Completed with full metric analysis.</p>
</section>`
    }
  },
  {
    id: "lab-12",
    type: "lab",
    badge: "Laboratory Exp XII",
    title: "Lab 12: Dual Distributed Architectures (12A & 12B)",
    date: "Semester 5 • Practical",
    summary: "Comparative build of split backend micro-components (Lab 12A vs Lab 12B), testing asynchronous concurrency and communication pipelines.",
    tags: ["Distributed Systems", "Concurrent I/O", "Microservices"],
    githubPath: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/lab/Lab12",
    details: {
      objective: "Analyze concurrency trade-offs across divided server implementations, examining payload delivery and process decoupling.",
      keyConcepts: [
        "Concurrent request benchmarking across parallel services",
        "Internal service-to-service communication contracts",
        "Failover detection and fault-tolerant recovery"
      ],
      codeSnippet: `// Distributed Module Dispatcher (Lab12)
async function dispatchService(clusterId, payload) {
  console.log(\`Dispatching payload to node \${clusterId}...\`);
  // Async microservice dispatch
}`
    }
  },
  {
    id: "server-core",
    type: "server",
    badge: "Central Server",
    title: "Core Backend Node.js Server Architecture",
    date: "Semester 5 • System Server",
    summary: "Dedicated Node.js backend server orchestrating HTTP endpoints, JSON serialization, middleware pipelines, and local process management.",
    tags: ["Node.js", "Server Core", "npm", "Async I/O"],
    githubPath: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/Server",
    details: {
      objective: "Run an always-on development server providing clean API contracts, unified routing, and persistent server telemetry.",
      keyConcepts: [
        "Native package.json scripts and dependency management",
        "Non-blocking I/O event loop execution",
        "Error-handling catch-all middleware and graceful termination (SIGINT)"
      ],
      codeSnippet: `// Server Core Initialization
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    author: "Gaurav Bhaskar",
    sapId: "590012457",
    status: "Codex Server Running"
  });
});`
    }
  }
];

// --- 2. Web Audio Synthesizer (Zero External Dependencies) ---
class DaVinciSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playMechanicalTick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  playQuillStroke() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const bufferSize = this.ctx.sampleRate * 0.06;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2200;
    filter.Q.value = 3.5;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start();
  }

  playBootChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Play Renaissance chord (A4, C#5, E5)
    const freqs = [440, 554.37, 659.25];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + 1.2);
    });
  }
}

const soundEngine = new DaVinciSoundEngine();

// --- 3. Abnormal Custom Cursor & Drafting HUD Engine ---
class AbnormalCursorEngine {
  constructor() {
    this.cursor = document.getElementById('abnormal-cursor');
    this.hud = document.getElementById('cursor-hud');
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.speed = 0.2;
    this.phi = 1.6180339887;

    // Ink Canvas Trail
    this.canvas = document.getElementById('cursor-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.lastDist = 0;

    this.init();
  }

  init() {
    if (!this.cursor) return;

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.addInkParticle(e.clientX, e.clientY);
    });

    window.addEventListener('mousedown', () => {
      this.cursor.classList.add('is-clicking');
      soundEngine.playMechanicalTick();
    });

    window.addEventListener('mouseup', () => {
      this.cursor.classList.remove('is-clicking');
    });

    // Hover detection for interactive targets
    this.bindHoverListeners();

    // Start render loop
    requestAnimationFrame(() => this.loop());
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  addInkParticle(x, y) {
    if (this.particles.length > 55) return;
    this.particles.push({
      x: x,
      y: y,
      radius: Math.random() * 2.2 + 0.8,
      alpha: 0.55,
      decay: Math.random() * 0.02 + 0.015,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8
    });
  }

  bindHoverListeners() {
    const targets = document.querySelectorAll('a, button, input, .codex-card, .repo-card, .filter-pill');
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.classList.add('is-hovering');
        if (this.hud) this.hud.textContent = '[ NODE SNAP • Φ ]';
        soundEngine.playQuillStroke();
      });
      el.addEventListener('mouseleave', () => {
        this.cursor.classList.remove('is-hovering');
      });
    });
  }

  loop() {
    // Lerp cursor position
    this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
    this.pos.y += (this.mouse.y - this.pos.y) * this.speed;

    this.cursor.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px)`;

    // Update HUD Coordinates
    if (this.hud && !this.cursor.classList.contains('is-hovering')) {
      const xNorm = Math.round(this.pos.x);
      const yNorm = Math.round(this.pos.y);
      const theta = Math.round((Math.atan2(this.pos.y, this.pos.x) * 180) / Math.PI);
      this.hud.textContent = `[ X:${xNorm} | Y:${yNorm} | ∠${theta}° ]`;
    }

    // Render Ink Trail Particles
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        this.ctx.fill();
      }
    }

    requestAnimationFrame(() => this.loop());
  }
}

// --- 4. Background Parchment & Sacred Geometry Canvas ---
class ParchmentGeometryCanvas {
  constructor() {
    this.canvas = document.getElementById('parchment-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.angle = 0;
    this.nodes = [];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Generate constellation nodes representing backend endpoints
    const nodeCount = 35;
    for (let i = 0; i < nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 1
      });
    }

    requestAnimationFrame(() => this.render());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.angle += 0.0015;

    // Draw Subtle Fibonacci Spiral Draft in center
    const cx = this.canvas.width * 0.75;
    const cy = this.canvas.height * 0.45;

    this.ctx.save();
    this.ctx.translate(cx, cy);
    this.ctx.rotate(this.angle);

    this.ctx.strokeStyle = 'rgba(212, 175, 55, 0.06)';
    this.ctx.lineWidth = 1;

    // Archimedean / Golden Ratio Spiral
    this.ctx.beginPath();
    for (let i = 0; i < 300; i++) {
      const theta = 0.1 * i;
      const r = 2.5 * Math.pow(theta, 1.25);
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      if (i === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();

    // Astrolabe concentric guide rings
    for (let r of [60, 140, 240, 360]) {
      this.ctx.beginPath();
      this.ctx.setLineDash([4, 12]);
      this.ctx.arc(0, 0, r, 0, Math.PI * 2);
      this.ctx.stroke();
    }
    this.ctx.setLineDash([]);
    this.ctx.restore();

    // Draw Dynamic Network Nodes (Backend Graph)
    this.ctx.strokeStyle = 'rgba(212, 175, 55, 0.04)';
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;

      // Draw node dot
      this.ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Connect nearby nodes
      for (let j = i + 1; j < this.nodes.length; j++) {
        const other = this.nodes[j];
        const dist = Math.hypot(node.x - other.x, node.y - other.y);
        if (dist < 140) {
          this.ctx.beginPath();
          this.ctx.moveTo(node.x, node.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.render());
  }
}

// --- 5. DOM Renderers & Interactive Codex Features ---
class CodexApp {
  constructor() {
    this.cardsContainer = document.getElementById('course-cards-container');
    this.searchInput = document.getElementById('course-search-input');
    this.filterPills = document.querySelectorAll('.filter-pill');
    this.modalBackdrop = document.getElementById('codex-modal-backdrop');
    this.modalCloseBtn = document.getElementById('modal-close-btn');
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.audioToggleBtn = document.getElementById('audio-toggle-btn');

    this.currentFilter = 'all';
    this.searchQuery = '';

    this.init();
  }

  init() {
    this.renderCards();
    this.bindEvents();
  }

  bindEvents() {
    // Search
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderCards();
      });
    }

    // Filter pills
    this.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.currentFilter = pill.getAttribute('data-filter') || 'all';
        soundEngine.playMechanicalTick();
        this.renderCards();
      });
    });

    // Audio Toggle
    if (this.audioToggleBtn) {
      this.audioToggleBtn.addEventListener('click', () => {
        soundEngine.enabled = !soundEngine.enabled;
        this.audioToggleBtn.style.opacity = soundEngine.enabled ? '1' : '0.5';
        this.audioToggleBtn.querySelector('span').textContent = soundEngine.enabled ? 'Audio: On' : 'Audio: Off';
        if (soundEngine.enabled) soundEngine.playQuillStroke();
      });
    }

    // Modal Close
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === this.modalBackdrop) this.closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });

    // Copy Buttons delegation
    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('.copy-btn');
      if (copyBtn) {
        const textToCopy = copyBtn.getAttribute('data-copy');
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Copied!</span>
            `;
            soundEngine.playMechanicalTick();
            setTimeout(() => {
              copyBtn.innerHTML = originalText;
            }, 2000);
          });
        }
      }
    });
  }

  renderCards() {
    if (!this.cardsContainer) return;

    const filtered = courseData.filter(item => {
      // Type filter
      if (this.currentFilter !== 'all' && item.type !== this.currentFilter) {
        return false;
      }
      // Search filter
      if (this.searchQuery) {
        const matchTitle = item.title.toLowerCase().includes(this.searchQuery);
        const matchDesc = item.summary.toLowerCase().includes(this.searchQuery);
        const matchTags = item.tags.some(t => t.toLowerCase().includes(this.searchQuery));
        return matchTitle || matchDesc || matchTags;
      }
      return true;
    });

    if (filtered.length === 0) {
      this.cardsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; border: 1px dashed var(--border-parchment); border-radius: 8px;">
          <p style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--gold-accent);">No manuscript folios correspond to this query.</p>
          <p style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--ink-muted); margin-top: 0.5rem;">Try searching for "Express", "Python", "Lab", or reset filters.</p>
        </div>
      `;
      return;
    }

    this.cardsContainer.innerHTML = filtered.map(item => {
      let badgeClass = 'badge-theory';
      if (item.type === 'lab') badgeClass = 'badge-lab';
      if (item.type === 'server') badgeClass = 'badge-server';

      return `
        <article class="codex-card" data-id="${item.id}">
          <div class="card-top">
            <span class="card-badge ${badgeClass}">${item.badge}</span>
            <span class="card-folio-num">${item.date}</span>
          </div>

          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.summary}</p>

          <div class="card-tags">
            ${item.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
          </div>

          <div class="card-footer">
            <button class="inspect-btn" onclick="window.codexApp.openModal('${item.id}')">
              <span>Inspect Dossier</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>

            <a href="${item.githubPath}" target="_blank" rel="noopener noreferrer" class="github-chip-link" title="Open in GitHub">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>Repo Folder</span>
            </a>
          </div>
        </article>
      `;
    }).join('');

    // Re-bind abnormal cursor hover listeners to fresh DOM cards
    if (window.cursorEngine) {
      window.cursorEngine.bindHoverListeners();
    }
  }

  openModal(id) {
    const item = courseData.find(d => d.id === id);
    if (!item || !this.modalBackdrop) return;

    soundEngine.playMechanicalTick();

    const titleEl = document.getElementById('modal-title');
    const folioEl = document.getElementById('modal-folio');
    const contentEl = document.getElementById('modal-content');
    const githubLinkEl = document.getElementById('modal-github-link');

    if (titleEl) titleEl.textContent = item.title;
    if (folioEl) folioEl.textContent = `${item.badge} • ${item.date}`;

    if (contentEl) {
      contentEl.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-family: var(--font-display); font-size: 0.95rem; color: var(--gold-accent); margin-bottom: 0.5rem; text-transform: uppercase;">
            Curricular Objective
          </h4>
          <p style="font-size: 0.95rem; color: var(--ink-secondary); line-height: 1.6;">
            ${item.details.objective}
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-family: var(--font-display); font-size: 0.95rem; color: var(--gold-accent); margin-bottom: 0.6rem; text-transform: uppercase;">
            Key Architectural Theorems
          </h4>
          <ul style="padding-left: 1.2rem; color: var(--ink-primary); font-size: 0.92rem; line-height: 1.7;">
            ${item.details.keyConcepts.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div class="code-dossier-box">
          <div class="code-dossier-header">
            <span>CODEX SOURCE EXTRACT</span>
            <span>BACKEND REPO</span>
          </div>
          <pre class="code-dossier-content"><code>${this.escapeHtml(item.details.codeSnippet)}</code></pre>
        </div>
      `;
    }

    if (githubLinkEl) {
      githubLinkEl.href = item.githubPath;
    }

    this.modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (!this.modalBackdrop) return;
    this.modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
}

// --- 6. 3D Laptop Opening Intro Controller ---
class LaptopIntroController {
  constructor() {
    this.overlay = document.getElementById('laptop-intro-overlay');
    this.skipBtn = document.getElementById('skip-intro-btn');
    this.replayBtn = document.getElementById('replay-intro-btn');
    this.hint = document.getElementById('intro-action-hint');
    this.termLines = [
      document.getElementById('term-line-2'),
      document.getElementById('term-line-3'),
      document.getElementById('term-line-4')
    ];
    this.isDone = false;
    this.init();
  }

  init() {
    if (!this.overlay) return;

    this.runIntroSequence();

    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.skipIntro();
      });
    }

    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', () => this.replayIntro());
    }

    window.addEventListener('keydown', (e) => {
      if (this.overlay && !this.overlay.classList.contains('is-exiting')) {
        if (e.key === 'Escape' || e.code === 'Space') {
          this.skipIntro();
        }
      }
    });

    this.overlay.addEventListener('click', (e) => {
      if (e.target.closest('#skip-intro-btn')) return;
      if (!this.isDone) {
        this.skipIntro();
      }
    });
  }

  runIntroSequence() {
    this.isDone = false;
    this.overlay.classList.remove('is-exiting', 'is-zooming', 'is-opened');
    
    // Step 1: Open laptop lid after short pause
    setTimeout(() => {
      if (this.isDone) return;
      this.overlay.classList.add('is-opened');
      soundEngine.playMechanicalTick();
      if (this.hint) {
        const txt = this.hint.querySelector('.hint-text');
        if (txt) txt.textContent = "Booting Codex System...";
      }
      
      // Step 2: Screen chime
      setTimeout(() => {
        if (this.isDone) return;
        soundEngine.playBootChime();
      }, 700);

      // Terminal line 2
      setTimeout(() => {
        if (this.isDone) return;
        if (this.termLines[0]) this.termLines[0].classList.add('is-visible');
        soundEngine.playQuillStroke();
      }, 1400);

      // Terminal line 3
      setTimeout(() => {
        if (this.isDone) return;
        if (this.termLines[1]) this.termLines[1].classList.add('is-visible');
        soundEngine.playQuillStroke();
      }, 2100);

      // Terminal line 4
      setTimeout(() => {
        if (this.isDone) return;
        if (this.termLines[2]) this.termLines[2].classList.add('is-visible');
        soundEngine.playQuillStroke();
        if (this.hint) {
          const txt = this.hint.querySelector('.hint-text');
          if (txt) txt.textContent = "Entering Gaurav's Backend Journey...";
        }
      }, 2800);

      // Step 3: 3D Camera Zoom fly-through directly into screen
      setTimeout(() => {
        if (this.isDone) return;
        this.overlay.classList.add('is-zooming');
      }, 3400);

      // Step 4: Fade out overlay and reveal main portfolio
      setTimeout(() => {
        if (this.isDone) return;
        this.finishIntro();
      }, 4200);

    }, 450);
  }

  skipIntro() {
    this.isDone = true;
    this.finishIntro();
  }

  finishIntro() {
    if (!this.overlay) return;
    this.overlay.classList.add('is-exiting');
    soundEngine.playMechanicalTick();
    setTimeout(() => {
      this.overlay.style.display = 'none';
    }, 750);
  }

  replayIntro() {
    if (!this.overlay) return;
    this.overlay.style.display = 'flex';
    this.termLines.forEach(l => l && l.classList.remove('is-visible'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.runIntroSequence();
  }
}

// Global Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.cursorEngine = new AbnormalCursorEngine();
  window.geometryCanvas = new ParchmentGeometryCanvas();
  window.codexApp = new CodexApp();
  window.laptopIntro = new LaptopIntroController();
});
