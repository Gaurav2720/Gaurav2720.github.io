/**
 * GAURAV BHASKAR - SEMESTER 5 BACKEND DEVELOPMENT LAB DATA
 * Repositories:
 *   - https://github.com/Gaurav2720/Backend-Main-JS-Python- (Main backend labs)
 *   - https://github.com/Gaurav2720/FASTapi_handsON (FastAPI hands-on labs)
 *   - https://github.com/Gaurav2720/Gaurav2720.github.io (This portfolio site)
 *
 * Each entry carries:
 *   link         -> code folder in the respective repository
 *   report       -> on-site report section (report.html#lab-N)
 *   sourceReport -> the original report.md / README.md on GitHub (null if none)
 */

const REPO_BACKEND = "https://github.com/Gaurav2720/Backend-Main-JS-Python-";
const REPO_FASTAPI = "https://github.com/Gaurav2720/FASTapi_handsON";
const REPO_PORTFOLIO = "https://github.com/Gaurav2720/Gaurav2720.github.io";

const TREE_BACKEND = REPO_BACKEND + "/tree/master/";
const BLOB_BACKEND = REPO_BACKEND + "/blob/master/";
const TREE_FASTAPI = REPO_FASTAPI + "/tree/main/";
const BLOB_FASTAPI = REPO_FASTAPI + "/blob/main/";

const EXPERIMENTS_DATA = [
  {
    id: 1,
    title: "HTML5 Semantic Structure & Form Controls",
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
    category: "NODE",
    categoryLabel: "Assignment",
    subCategory: "BACKEND/lab/Assignment/loginpage",
    description: "Session-based login, protected routes, and a persistent todo manager.",
    link: TREE_BACKEND + "BACKEND/lab/Assignment/loginpage",
    report: "report.html#lab-8",
    sourceReport: BLOB_BACKEND + "BACKEND/lab/Assignment/loginpage/README.md",
    tags: ["Express.js", "Auth", "Sessions"]
  },
  // ===== FASTAPI HANDS-ON LABS =====
  {
    id: 9,
    title: "FastAPI Project Setup & First Endpoints",
    category: "PYTHON",
    categoryLabel: "FastAPI Lab 1",
    subCategory: "fastapi-setup",
    description: "FastAPI project structure, ASGI server (uvicorn), path operations, and automatic OpenAPI docs.",
    link: TREE_FASTAPI + "fastapi-setup",
    report: "report.html#fastapi-1",
    sourceReport: BLOB_FASTAPI + "fastapi-setup/README.md",
    tags: ["FastAPI", "Python", "OpenAPI", "uvicorn"]
  },
  {
    id: 10,
    title: "FastAPI CRUD with Pydantic Models",
    category: "PYTHON",
    categoryLabel: "FastAPI Lab 2",
    subCategory: "fastapi-crud",
    description: "Request/response validation with Pydantic, path/query/body parameters, and full CRUD operations.",
    link: TREE_FASTAPI + "fastapi-crud",
    report: "report.html#fastapi-2",
    sourceReport: BLOB_FASTAPI + "fastapi-crud/README.md",
    tags: ["FastAPI", "Pydantic", "CRUD", "Validation"]
  },
  {
    id: 11,
    title: "FastAPI Database Integration (SQLAlchemy + SQLite)",
    category: "PYTHON",
    categoryLabel: "FastAPI Lab 3",
    subCategory: "fastapi-db",
    description: "SQLAlchemy ORM setup, database models, migrations with Alembic, and async database sessions.",
    link: TREE_FASTAPI + "fastapi-db",
    report: "report.html#fastapi-3",
    sourceReport: BLOB_FASTAPI + "fastapi-db/README.md",
    tags: ["FastAPI", "SQLAlchemy", "SQLite", "Alembic"]
  },
  {
    id: 12,
    title: "FastAPI Authentication with JWT & OAuth2",
    category: "PYTHON",
    categoryLabel: "FastAPI Lab 4",
    subCategory: "fastapi-auth",
    description: "JWT token authentication, OAuth2 password flow, password hashing with bcrypt, and protected routes.",
    link: TREE_FASTAPI + "fastapi-auth",
    report: "report.html#fastapi-4",
    sourceReport: BLOB_FASTAPI + "fastapi-auth/README.md",
    tags: ["FastAPI", "JWT", "OAuth2", "Security"]
  },
  {
    id: 13,
    title: "FastAPI Testing with Pytest & TestClient",
    category: "PYTHON",
    categoryLabel: "FastAPI Lab 5",
    subCategory: "fastapi-testing",
    description: "Unit and integration testing using TestClient, fixtures, dependency overrides, and coverage reporting.",
    link: TREE_FASTAPI + "fastapi-testing",
    report: "report.html#fastapi-5",
    sourceReport: BLOB_FASTAPI + "fastapi-testing/README.md",
    tags: ["FastAPI", "Pytest", "Testing", "TestClient"]
  }
];

window.EXPERIMENTS_DATA = EXPERIMENTS_DATA;
