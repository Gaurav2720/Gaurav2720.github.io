/**
 * GAURAV'S BACKEND JOURNEY - EXPERIMENTS DATA STORE
 * 
 * Centralized data source for all technical experiments, lab practicals,
 * systems, and architecture theory.
 * 
 * To add a new experiment, simply append a new object to the array below:
 * 
 * {
 *   id: 16,
 *   title: "Example Title",
 *   category: "LAB", // "LAB" | "THEORY" | "PROJECTS"
 *   subCategory: "Backend · Category",
 *   description: "Short technical description of the experiment.",
 *   status: "completed",
 *   date: "Semester 5",
 *   link: "https://github.com/Gaurav2720/Backend",
 *   tags: ["Tag1", "Tag2"]
 * }
 */

const EXPERIMENTS_DATA = [
  // --- LAB EXPERIMENTS (08 Total) ---
  {
    id: 1,
    title: "REST API Authentication & JWT Protection",
    category: "LAB",
    subCategory: "Backend · Security",
    description: "JWT authentication, middleware chaining, token refresh mechanics, and protected route pipelines.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/class5",
    tags: ["Node.js", "JWT", "Express", "Security"]
  },
  {
    id: 2,
    title: "Express Server & Modular Route Hierarchy",
    category: "LAB",
    subCategory: "Backend · Architecture",
    description: "Modular Express architecture separating route dispatchers, controller logic, and JSON response lifecycle.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/Class1",
    tags: ["Express.js", "REST", "Node.js", "Middleware"]
  },
  {
    id: 3,
    title: "Python Virtual Environments & WSGI/ASGI",
    category: "LAB",
    subCategory: "Python · Runtime",
    description: "Setting up isolated virtual environments, WSGI/ASGI execution lifecycles, and dependency management.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/class3",
    tags: ["Python 3", "venv", "WSGI", "Runtime"]
  },
  {
    id: 4,
    title: "HTTP Wire Protocols & Analytical Lab Reports",
    category: "LAB",
    subCategory: "Web Standards · Lab 1",
    description: "Empirical investigation of HTTP request/response sequences, MIME negotiation, and RFC protocols.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/lab/lAB1",
    tags: ["RFC", "HTTP 1.1", "MIME", "Reports"]
  },
  {
    id: 5,
    title: "Dual Distributed Node Clusters (Lab 12A & 12B)",
    category: "LAB",
    subCategory: "Distributed Systems · Lab 12",
    description: "Comparative benchmark of dual distributed backend nodes, testing asynchronous payload dispatch and failover.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/lab/Lab12",
    tags: ["Distributed", "Cluster", "Concurrency", "I/O"]
  },
  {
    id: 6,
    title: "Redis In-Memory Caching & Rate Limiting",
    category: "LAB",
    subCategory: "Cache · Microservices",
    description: "Implementing key-value TTL caches, leaky bucket rate limiting, and API response acceleration.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend",
    tags: ["Redis", "Caching", "Rate Limiting", "KV Store"]
  },
  {
    id: 7,
    title: "Cookie Cryptography & Session Stores",
    category: "LAB",
    subCategory: "Security · Sessions",
    description: "Configuring express-session, HMAC cryptographic cookie signatures, and secure HttpOnly cookie attributes.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/class5",
    tags: ["Cookies", "HMAC", "Session", "Security"]
  },
  {
    id: 8,
    title: "WebSocket Real-Time Event Streaming",
    category: "LAB",
    subCategory: "Networking · Full-Duplex",
    description: "Bi-directional TCP socket streaming, heartbeat ping-pong, and real-time backend broadcast events.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend",
    tags: ["WebSockets", "Sockets", "Streaming", "Realtime"]
  },

  // --- THEORY MODULES (04 Total) ---
  {
    id: 9,
    title: "Database Indexing & Query Optimization",
    category: "THEORY",
    subCategory: "Database · Architecture",
    description: "Understanding B-Trees, composite indexes, query execution plans, and performance tuning.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend",
    tags: ["SQL", "Indexing", "Performance", "Query Plan"]
  },
  {
    id: 10,
    title: "Network Diagnostics & Postman Automation",
    category: "THEORY",
    subCategory: "Networking · Protocol",
    description: "HTTP header mechanics, TTFB latency analysis, status code semantics, and automated Postman test suites.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/Class2",
    tags: ["Postman", "HTTP", "Testing", "DevTools"]
  },
  {
    id: 11,
    title: "Dynamic Endpoints & Payload Transformation",
    category: "THEORY",
    subCategory: "Python · Data",
    description: "Parsing dynamic request arguments, input sanitization, and structured JSON serialization in Python.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/TheoryClass/class4",
    tags: ["Python", "Serialization", "Validation"]
  },
  {
    id: 12,
    title: "Distributed Message Queues & Event Bus",
    category: "THEORY",
    subCategory: "Architecture · Messaging",
    description: "Decoupled pub-sub architectures, message broker models, backpressure handling, and delivery semantics.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend",
    tags: ["PubSub", "Event-Driven", "Queues", "Architecture"]
  },

  // --- PROJECTS & SYSTEMS (03 Total) ---
  {
    id: 13,
    title: "Core System Server & Process Supervisor",
    category: "PROJECTS",
    subCategory: "Infrastructure · Node.js",
    description: "Unified backend orchestrator with health telemetry, graceful shutdown hooks, and persistent process logging.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend/tree/main/BACKEND/Server",
    tags: ["Server", "Node.js", "Telemetry", "Process"]
  },
  {
    id: 14,
    title: "Distributed Task Queue & Background Worker",
    category: "PROJECTS",
    subCategory: "Distributed · Systems",
    description: "Asynchronous job scheduler with retry backoff policies, dead-letter queues, and worker pool scaling.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend",
    tags: ["Workers", "Task Queue", "Async", "Scalability"]
  },
  {
    id: 15,
    title: "API Gateway & Reverse Proxy Router",
    category: "PROJECTS",
    subCategory: "Infrastructure · Gateway",
    description: "Centralized entry gateway performing TLS termination, token validation, rate limiting, and service routing.",
    status: "completed",
    date: "Semester 5",
    link: "https://github.com/Gaurav2720/Backend",
    tags: ["Gateway", "Proxy", "Routing", "Security"]
  }
];

// Export to window for vanilla browser script usage
if (typeof window !== "undefined") {
  window.EXPERIMENTS_DATA = EXPERIMENTS_DATA;
}

// Export for Node/ES module environments if required
if (typeof module !== "undefined" && module.exports) {
  module.exports = EXPERIMENTS_DATA;
}
