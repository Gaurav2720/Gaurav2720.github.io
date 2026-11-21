/**
 * GAURAV BHASKAR - BACKEND ENGINEERING EXPERIMENTS DATA
 * Direct repository source: https://github.com/Gaurav2720/Backend-Main-JS-Python-
 *
 * Each entry carries:
 *   link         -> code folder in the backend repository
 *   report       -> on-site report section (report.html#lab-N)
 *   sourceReport -> the original report.md / README.md on GitHub (null if none)
 */

const REPO = "https://github.com/Gaurav2720/Backend-Main-JS-Python-";
const TREE = REPO + "/tree/master/";
const BLOB = REPO + "/blob/master/";

const EXPERIMENTS_DATA = [
  // =========================================================================
  // 1. LABORATORY PRACTICALS (BACKEND/lab/)
  // =========================================================================
  {
    id: 1,
    title: "HTML5 Semantic Structure & Form Controls",
    category: "LAB",
    categoryLabel: "Lab 1",
    subCategory: "BACKEND/lab/lAB1",
    description: "Semantic HTML5 layout structure (header, nav, main, section, footer), advanced form input types with validation, progress/meter elements, and embedded audio/video multimedia controls.",
    link: TREE + "BACKEND/lab/lAB1",
    report: "report.html#lab-1",
    sourceReport: BLOB + "BACKEND/lab/lAB1/Report.md",
    tags: ["HTML5", "Forms", "Multimedia", "Semantic Web"]
  },
  {
    id: 2,
    title: "Core JavaScript Engine & Async Foundations",
    category: "LAB",
    categoryLabel: "Lab 5",
    subCategory: "BACKEND/lab/Lab5/Lab_05_JS_Concepts",
    description: "Exploration of JavaScript execution contexts, lexical scoping, closures, prototype inheritance, event loop mechanics, and asynchronous operations using Promises and async/await.",
    link: TREE + "BACKEND/lab/Lab5/Lab_05_JS_Concepts",
    report: "report.html#lab-2",
    sourceReport: BLOB + "BACKEND/lab/Lab5/Lab_05_JS_Concepts/Report.md",
    tags: ["JavaScript", "Async/Await", "Closures", "Prototypes"]
  },
  {
    id: 3,
    title: "DOM Manipulation, Events & Interactive Todo Application",
    category: "LAB",
    categoryLabel: "Lab 7, 8, 9",
    subCategory: "BACKEND/lab/Lab7,8,9",
    description: "Hands-on browser DOM tree manipulation, event bubbling and delegation, ES6+ array methods, and an interactive Todo application with real-time state updating.",
    link: TREE + "BACKEND/lab/Lab7,8,9",
    report: "report.html#lab-3",
    sourceReport: BLOB + "BACKEND/lab/Lab7,8,9/Report.md",
    tags: ["DOM", "Events", "ES6+", "Vanilla JS"]
  },
  {
    id: 4,
    title: "Express Server Routing & EJS Server-Side Rendering",
    category: "LAB",
    categoryLabel: "Lab 12A",
    subCategory: "BACKEND/lab/Lab12/Lab12A/nodejs-express-lab",
    description: "Express HTTP request-response cycle, route and query parameters (req.params, req.query), JSON body parsing middleware, and dynamic server-side page rendering with EJS templates.",
    link: TREE + "BACKEND/lab/Lab12/Lab12A/nodejs-express-lab",
    report: "report.html#lab-4",
    sourceReport: BLOB + "BACKEND/lab/Lab12/Lab12A/report.md",
    tags: ["Node.js", "Express.js", "EJS", "SSR"]
  },
  {
    id: 5,
    title: "State Management with Cookies & Express Sessions",
    category: "LAB",
    categoryLabel: "Lab 12B",
    subCategory: "BACKEND/lab/Lab12/LAB12b",
    description: "Managing stateless HTTP using cookie-parser (maxAge, secure flags, clearCookie) and server-side express-session state tracking with signed session cookies and logout teardowns.",
    link: TREE + "BACKEND/lab/Lab12/LAB12b",
    report: "report.html#lab-5",
    sourceReport: BLOB + "BACKEND/lab/Lab12/LAB12b/report.md",
    tags: ["Express-Session", "Cookies", "Authentication", "Security"]
  },
  {
    id: 6,
    title: "MongoDB Persistence & Mongoose ODM CRUD Operations",
    category: "LAB",
    categoryLabel: "Lab 13",
    subCategory: "BACKEND/lab/Lab13/mongoose-demo",
    description: "Document-oriented database persistence using MongoDB and Mongoose ODM: strict schema definitions, field validation, unique indexing, user registration workflows, and asynchronous CRUD operations.",
    link: TREE + "BACKEND/lab/Lab13/mongoose-demo",
    report: "report.html#lab-6",
    sourceReport: BLOB + "BACKEND/lab/Lab13/report.md",
    tags: ["MongoDB", "Mongoose", "NoSQL", "CRUD"]
  },
  {
    id: 7,
    title: "Full-Stack Django Todo Application & SQLite Integration",
    category: "LAB",
    categoryLabel: "Lab 15",
    subCategory: "BACKEND/lab/LAB15",
    description: "Full-stack application development in Python Django adhering to the Model-View-Template (MVT) architecture, featuring SQLite persistence, ORM queries, CSRF security, and responsive UI.",
    link: TREE + "BACKEND/lab/LAB15",
    report: "report.html#lab-7",
    sourceReport: BLOB + "BACKEND/lab/LAB15/report.md",
    tags: ["Django", "Python", "SQLite", "MVT Pattern"]
  },
  {
    id: 8,
    title: "Authentication Flow & Interactive Todo Service",
    category: "LAB",
    categoryLabel: "Lab Assignment",
    subCategory: "BACKEND/lab/Assignment/loginpage",
    description: "End-to-end user authentication workflow with secure session tracking, protected route middleware, and an integrated todo task manager with persistent state handling.",
    link: TREE + "BACKEND/lab/Assignment/loginpage",
    report: "report.html#lab-8",
    sourceReport: BLOB + "BACKEND/lab/Assignment/loginpage/README.md",
    tags: ["Express.js", "Auth", "Sessions", "Todo Service"]
  },

  // =========================================================================
  // 2. THEORY & REST API IMPLEMENTATIONS (BACKEND/TheoryClass/)
  // =========================================================================
  {
    id: 9,
    title: "Express Server & Dynamic EJS Directory Binding",
    category: "THEORY",
    categoryLabel: "Theory · Class 1",
    subCategory: "BACKEND/TheoryClass/Class1",
    description: "Configuring Express with the EJS view engine, implementing modular routing controllers, and dynamically binding student collection data to frontend templates.",
    link: TREE + "BACKEND/TheoryClass/Class1",
    report: "report.html#lab-9",
    sourceReport: null,
    tags: ["Express.js", "EJS", "Node.js", "Routing"]
  },
  {
    id: 10,
    title: "HTTP Network DevTools & Postman API Testing",
    category: "THEORY",
    categoryLabel: "Theory · Class 2",
    subCategory: "BACKEND/TheoryClass/Class2",
    description: "In-depth network protocol inspection, HTTP request/response headers, status code diagnostics (2xx, 4xx, 5xx), and comprehensive REST API validation via Postman collections.",
    link: TREE + "BACKEND/TheoryClass/Class2",
    report: "report.html#lab-10",
    sourceReport: null,
    tags: ["Postman", "DevTools", "HTTP", "API Testing"]
  },
  {
    id: 11,
    title: "Python FastAPI Initialization & ASGI Lifecycle",
    category: "THEORY",
    categoryLabel: "Theory · Class 3",
    subCategory: "BACKEND/TheoryClass/class3",
    description: "Virtual environment setup, Asynchronous Server Gateway Interface (ASGI) lifecycles, minimal FastAPI endpoint handlers, and running live-reloading servers with Uvicorn.",
    link: TREE + "BACKEND/TheoryClass/class3",
    report: "report.html#lab-11",
    sourceReport: null,
    tags: ["FastAPI", "Python", "ASGI", "Uvicorn"]
  },
  {
    id: 12,
    title: "FastAPI RESTful CRUD API with Pydantic Validation",
    category: "THEORY",
    categoryLabel: "Theory · Class 4",
    subCategory: "BACKEND/TheoryClass/class4",
    description: "Building a production-ready REST API in FastAPI utilizing Pydantic BaseModel schemas for automatic request validation, type checking, path/query filtering, and OpenAPI auto-docs.",
    link: TREE + "BACKEND/TheoryClass/class4",
    report: "report.html#lab-12",
    sourceReport: null,
    tags: ["FastAPI", "Pydantic", "REST API", "Validation"]
  },
  {
    id: 13,
    title: "HTTP Cookie Lifecycle & Security Defense Flags",
    category: "THEORY",
    categoryLabel: "Theory · Class 5",
    subCategory: "BACKEND/TheoryClass/class5",
    description: "Client-server cookie exchange protocols in Express: setting cookies with maxAge, httpOnly (XSS defense), secure HTTPS attributes, reading incoming cookies, and res.clearCookie teardown.",
    link: TREE + "BACKEND/TheoryClass/class5",
    report: "report.html#lab-13",
    sourceReport: null,
    tags: ["Cookies", "Express.js", "Security", "HttpOnly"]
  },
  {
    id: 14,
    title: "Object-Relational Mapping (ORM) & Database Abstraction",
    category: "THEORY",
    categoryLabel: "Unit 2 ORM",
    subCategory: "BACKEND/TheoryClass/Unit2/ORM",
    description: "Core concepts of Object-Relational Mapping (ORM), abstracting SQL/NoSQL queries into object interfaces, data model mapping, relationships, and transaction handling.",
    link: TREE + "BACKEND/TheoryClass/Unit2/ORM",
    report: "report.html#lab-14",
    sourceReport: null,
    tags: ["ORM", "Database Design", "SQL/NoSQL", "Data Modeling"]
  },
  {
    id: 15,
    title: "SQLite Schema Design & Dual-Runtime Student Management",
    category: "THEORY",
    categoryLabel: "Theory · Class 15",
    subCategory: "BACKEND/TheoryClass/Class15",
    description: "Relational database schema modeling with SQLite (students_lab.db), building a blog application in Node.js, and implementing student management scripts in Python.",
    link: TREE + "BACKEND/TheoryClass/Class15",
    report: "report.html#lab-15",
    sourceReport: BLOB + "BACKEND/TheoryClass/Class15/report.md",
    tags: ["SQLite", "Python", "Node.js", "Relational DB"]
  },

  // =========================================================================
  // 3. DISTRIBUTED ARCHITECTURE, DOCKER & SYSTEMS
  // =========================================================================
  {
    id: 16,
    title: "Node.js Microservice Containerization with Docker",
    category: "SYSTEMS",
    categoryLabel: "Docker & DevOps",
    subCategory: "BACKEND/class_docker",
    description: "Writing Dockerfiles for Node.js backend services, configuring container networks, managing bind mounts for hot-reloading, and creating reproducible isolated environments.",
    link: TREE + "BACKEND/class_docker",
    report: "report.html#lab-16",
    sourceReport: null,
    tags: ["Docker", "Containers", "DevOps", "Microservices"]
  },
  {
    id: 17,
    title: "Distributed Event Streaming with Apache Kafka",
    category: "SYSTEMS",
    categoryLabel: "Kafka Architecture",
    subCategory: "BACKEND/KAFKA",
    description: "Event-driven distributed architecture using Apache Kafka with Docker Compose: decoupled Order, Inventory, and Notification microservices communicating via message topics.",
    link: TREE + "BACKEND/KAFKA",
    report: "report.html#lab-17",
    sourceReport: BLOB + "BACKEND/KAFKA/README.md",
    tags: ["Kafka", "Event-Driven", "Docker Compose", "Distributed Systems"]
  },
  {
    id: 18,
    title: "Full-Stack Note-Taking & Viva Examination Portal",
    category: "SYSTEMS",
    categoryLabel: "Examination System",
    subCategory: "BACKEND/Note-taking-Test-viva",
    description: "Complete Express.js and EJS note-taking platform featuring user viva preparation modules, markdown test reports, and structured backend architecture.",
    link: TREE + "BACKEND/Note-taking-Test-viva",
    report: "report.html#lab-18",
    sourceReport: BLOB + "BACKEND/Note-taking-Test-viva/Testreport.md",
    tags: ["Node.js", "Express", "EJS", "Full-Stack"]
  }
];

if (typeof window !== "undefined") {
  window.EXPERIMENTS_DATA = EXPERIMENTS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = EXPERIMENTS_DATA;
}
