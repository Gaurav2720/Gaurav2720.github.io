/**
 * GAURAV BHASKAR — SEMESTER 5 BACKEND DEVELOPMENT DATA
 * Repositories:
 *   - https://github.com/Gaurav2720/Backend-Main-JS-Python- (Main backend labs & theory units)
 *   - https://github.com/Gaurav2720/PBl_activity_590012457 (PBL: FastAPI, Docker & CI/CD)
 *   - https://github.com/Gaurav2720/Gaurav2720.github.io (Portfolio site)
 *
 * Each entry carries:
 *   track        -> "LAB" | "THEORY" | "PBL"
 *   link         -> code folder in the respective repository
 *   report       -> on-site report section (report.html#...)
 *   sourceReport -> the original report.md / README.md on GitHub (null if none)
 */

const REPO_BACKEND = "https://github.com/Gaurav2720/Backend-Main-JS-Python-";
const REPO_PBL = "https://github.com/Gaurav2720/PBl_activity_590012457";

const TREE_BACKEND = REPO_BACKEND + "/tree/master/";
const BLOB_BACKEND = REPO_BACKEND + "/blob/master/";
const TREE_PBL = REPO_PBL + "/tree/main/";
const BLOB_PBL = REPO_PBL + "/blob/main/";

const EXPERIMENTS_DATA = [
  // =========================================================================
  // 1. LABORATORY PRACTICALS (BACKEND/lab/ & Viva)
  // =========================================================================
  {
    id: 1,
    title: "HTML5 Semantic Structure & Form Controls",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "FRONTEND",
    categoryLabel: "Lab 1",
    subCategory: "BACKEND/lab/lAB1",
    description: "Semantic HTML5 layout, validated form inputs, and native audio/video elements.",
    link: TREE_BACKEND + "BACKEND/lab/lAB1",
    report: "report.html#lab-1",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/lAB1/Report.md",
    tags: ["HTML5", "Forms", "Multimedia"]
  },
  {
    id: 2,
    title: "Core JavaScript Engine & Async Foundations",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "FRONTEND",
    categoryLabel: "Lab 5",
    subCategory: "BACKEND/lab/Lab5/Lab_05_JS_Concepts",
    description: "Execution contexts, closures, prototypes, and Promises in practice.",
    link: TREE_BACKEND + "BACKEND/lab/Lab5/Lab_05_JS_Concepts",
    report: "report.html#lab-2",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/Lab5/Lab_05_JS_Concepts/Report.md",
    tags: ["JavaScript", "Async/Await", "Closures"]
  },
  {
    id: 3,
    title: "DOM Manipulation & Interactive Todo Application",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "FRONTEND",
    categoryLabel: "Lab 7–9",
    subCategory: "BACKEND/lab/Lab7,8,9",
    description: "DOM tree updates, event delegation, and a live todo app in vanilla JS.",
    link: TREE_BACKEND + "BACKEND/lab/Lab7,8,9",
    report: "report.html#lab-3",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/Lab7,8,9/Report.md",
    tags: ["DOM", "Events", "ES6+"]
  },
  {
    id: 4,
    title: "Express Routing & EJS Server-Side Rendering",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "NODE",
    categoryLabel: "Lab 12A",
    subCategory: "BACKEND/lab/Lab12/Lab12A/nodejs-express-lab",
    description: "Route and query params, JSON body parsing, and dynamic EJS pages.",
    link: TREE_BACKEND + "BACKEND/lab/Lab12/Lab12A/nodejs-express-lab",
    report: "report.html#lab-4",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/Lab12/Lab12A/report.md",
    tags: ["Node.js", "Express.js", "EJS"]
  },
  {
    id: 5,
    title: "Sessions & Cookies with Express",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "NODE",
    categoryLabel: "Lab 12B",
    subCategory: "BACKEND/lab/Lab12/LAB12b",
    description: "Stateful HTTP with cookie-parser, express-session, and secure flags.",
    link: TREE_BACKEND + "BACKEND/lab/Lab12/LAB12b",
    report: "report.html#lab-5",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/Lab12/LAB12b/report.md",
    tags: ["express-session", "Cookies", "Security"]
  },
  {
    id: 6,
    title: "MongoDB Persistence with Mongoose CRUD",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "NODE",
    categoryLabel: "Lab 13",
    subCategory: "BACKEND/lab/Lab13/mongoose-demo",
    description: "Mongoose schemas, validation, unique indexes, and async CRUD operations.",
    link: TREE_BACKEND + "BACKEND/lab/Lab13/mongoose-demo",
    report: "report.html#lab-6",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/Lab13/report.md",
    tags: ["MongoDB", "Mongoose", "CRUD"]
  },
  {
    id: 7,
    title: "Django Todo Application with SQLite",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "PYTHON",
    categoryLabel: "Lab 15",
    subCategory: "BACKEND/lab/LAB15",
    description: "Full-stack Django app following MVT, with ORM queries and CSRF protection.",
    link: TREE_BACKEND + "BACKEND/lab/LAB15",
    report: "report.html#lab-7",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/LAB15/report.md",
    tags: ["Django", "Python", "SQLite"]
  },
  {
    id: 8,
    title: "Authentication Flow & Todo Service",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "NODE",
    categoryLabel: "Assignment",
    subCategory: "BACKEND/lab/Assignment/loginpage",
    description: "Session-based login, protected routes, and a persistent todo manager.",
    link: TREE_BACKEND + "BACKEND/lab/Assignment/loginpage",
    report: "report.html#lab-8",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/Assignment/loginpage/README.md",
    tags: ["Express.js", "Auth", "Sessions"]
  },
  {
    id: 9,
    title: "Full-Stack Note-Taking & Viva Examination Portal",
    track: "LAB",
    trackLabel: "Lab Practical",
    category: "NODE",
    categoryLabel: "Midsem Viva",
    subCategory: "BACKEND/Note-taking-Test-viva",
    description: "Complete Express.js, EJS, and MongoDB Atlas note-taking platform with structured test report.",
    link: TREE_BACKEND + "BACKEND/Note-taking-Test-viva",
    report: "report.html#lab-9",
    sourceReport: BLOB_BACKEND + "BACKEND/Note-taking-Test-viva/Testreport.md",
    tags: ["Node.js", "Express.js", "MongoDB Atlas", "EJS"]
  },

  // =========================================================================
  // 2. THEORY WORK & UNIT ASSIGNMENTS (BACKEND/TheoryClass/Unit1–Unit4)
  // =========================================================================
  {
    id: 10,
    title: "Express Server & Dynamic EJS Directory Binding",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "NODE",
    categoryLabel: "Unit 1 · Class 1",
    subCategory: "BACKEND/TheoryClass/Unit1/Class1",
    description: "Express.js setup with EJS view engine and modular routing bound to dynamic student records.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit1/Class1",
    report: "report.html#theory-1",
    sourceReport: null,
    tags: ["Express.js", "EJS", "Routing", "Unit 1"]
  },
  {
    id: 11,
    title: "HTTP Network DevTools & Postman API Testing",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "NODE",
    categoryLabel: "Unit 1 · Class 2",
    subCategory: "BACKEND/TheoryClass/Unit1/Class2",
    description: "Inspecting HTTP headers, status code families, and validating REST endpoints with Postman.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit1/Class2",
    report: "report.html#theory-2",
    sourceReport: null,
    tags: ["HTTP", "Postman", "DevTools", "Unit 1"]
  },
  {
    id: 12,
    title: "HTTP Cookie Lifecycle & Session Management",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "NODE",
    categoryLabel: "Unit 1 · Class 5",
    subCategory: "BACKEND/TheoryClass/Unit1/class5",
    description: "Express cookie attributes (maxAge, httpOnly, secure) and server-side express-session management.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit1/class5",
    report: "report.html#theory-3",
    sourceReport: null,
    tags: ["Cookies", "Express-Session", "Security", "Unit 1"]
  },
  {
    id: 13,
    title: "LocalStorage Notes App (Client-Side Storage)",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "FRONTEND",
    categoryLabel: "Unit 1 · Assignment 1",
    subCategory: "BACKEND/TheoryClass/Unit1/Assignment1-LocalStorage-Notes-App",
    description: "Theory Assignment 1: Persistent browser notes using Web Storage API, JSON.stringify, and JSON.parse.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit1/Assignment1-LocalStorage-Notes-App",
    report: "report.html#theory-4",
    sourceReport: null,
    tags: ["Web Storage", "localStorage", "JavaScript", "Unit 1"]
  },
  {
    id: 14,
    title: "SQLAlchemy 2.x ORM & Declarative Relationships",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "PYTHON",
    categoryLabel: "Unit 2 · ORM",
    subCategory: "BACKEND/TheoryClass/Unit2/ORM",
    description: "SQLAlchemy 2.x declarative models, relational mappings, and SQLite persistence (students.db).",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit2/ORM",
    report: "report.html#theory-5",
    sourceReport: null,
    tags: ["ORM", "SQLAlchemy", "SQLite", "Unit 2"]
  },
  {
    id: 15,
    title: "Python FastAPI Initialization & ASGI Lifecycle",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "PYTHON",
    categoryLabel: "Unit 2 · Class 3",
    subCategory: "BACKEND/TheoryClass/Unit2/class3",
    description: "FastAPI fundamentals, ASGI server lifecycle with Uvicorn, and interactive OpenAPI documentation.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit2/class3",
    report: "report.html#theory-6",
    sourceReport: null,
    tags: ["FastAPI", "ASGI", "Uvicorn", "Unit 2"]
  },
  {
    id: 16,
    title: "FastAPI RESTful CRUD API with Pydantic Validation",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "PYTHON",
    categoryLabel: "Unit 2 · Class 4",
    subCategory: "BACKEND/TheoryClass/Unit2/class4",
    description: "RESTful CRUD routes in FastAPI with Pydantic BaseModel schemas and automatic validation.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit2/class4",
    report: "report.html#theory-7",
    sourceReport: null,
    tags: ["FastAPI", "Pydantic", "REST API", "Unit 2"]
  },
  {
    id: 17,
    title: "Relational Data Modeling & Dual-Runtime Scripts",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "PYTHON",
    categoryLabel: "Unit 2 · Class 15",
    subCategory: "BACKEND/TheoryClass/Unit2/Class15",
    description: "Relational schema modeling with SQLAlchemy (student_management.py) and Node.js Blog App.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit2/Class15",
    report: "report.html#theory-8",
    sourceReport: BLOB_BACKEND + "BACKEND/TheoryClass/Unit2/Class15/report.md",
    tags: ["SQLite", "SQLAlchemy", "Node.js", "Unit 2"]
  },
  {
    id: 18,
    title: "PostgreSQL JSONB & GIN Indexing Explorer",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "NODE",
    categoryLabel: "Unit 2 · Assignment 2",
    subCategory: "BACKEND/TheoryClass/Unit2/Assignment2-PostgreSQL-JSONB",
    description: "Theory Assignment 2: Semi-structured PostgreSQL JSONB queries, containment operators, and GIN indexes.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit2/Assignment2-PostgreSQL-JSONB",
    report: "report.html#theory-9",
    sourceReport: null,
    tags: ["PostgreSQL", "JSONB", "GIN Index", "Unit 2"]
  },
  {
    id: 19,
    title: "Django Task Manager API, Middleware & Caching",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "PYTHON",
    categoryLabel: "Unit 3 · Django",
    subCategory: "BACKEND/TheoryClass/Unit3/dJango",
    description: "REST endpoints, custom RequestTimingMiddleware, LocMemCache invalidation, and Django unit tests.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit3/dJango",
    report: "report.html#theory-10",
    sourceReport: null,
    tags: ["Django", "Middleware", "Caching", "Unit 3"]
  },
  {
    id: 20,
    title: "Multi-Stage FastAPI Docker & CI/CD Specification",
    track: "THEORY",
    trackLabel: "Theory Work",
    category: "PYTHON",
    categoryLabel: "Unit 4 · Docker",
    subCategory: "BACKEND/TheoryClass/Unit4/class_docker",
    description: "Multi-stage FastAPI Dockerfile, Docker Hub container registry, and GitHub Actions workflow setup.",
    link: TREE_BACKEND + "BACKEND/TheoryClass/Unit4/class_docker",
    report: "report.html#theory-11",
    sourceReport: null,
    tags: ["Docker", "CI/CD", "DevOps", "Unit 4"]
  },

  // =========================================================================
  // 3. PBL — PROJECT-BASED LEARNING (PBl_activity_590012457)
  // =========================================================================
  {
    id: 21,
    title: "FastAPI Docker & GitHub Actions CI/CD Pipeline",
    track: "PBL",
    trackLabel: "PBL Activity",
    category: "PYTHON",
    categoryLabel: "PBL · 590012457",
    subCategory: "FASTapi_handsON",
    description: "Containerized FastAPI service (python:3.12-slim) published to Docker Hub with automated GitHub Actions CI/CD and full 21-section documentation.",
    link: TREE_PBL + "FASTapi_handsON",
    report: "report.html#pbl-1",
    sourceReport: BLOB_PBL + "README.md",
    tags: ["FastAPI", "Docker", "Docker Hub", "GitHub Actions"]
  }
];

window.EXPERIMENTS_DATA = EXPERIMENTS_DATA;
