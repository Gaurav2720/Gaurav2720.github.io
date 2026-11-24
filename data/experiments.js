/**
 * GAURAV BHASKAR - SEMESTER 5 BACKEND DEVELOPMENT LAB DATA
 * Repository: https://github.com/Gaurav2720/Backend-Main-JS-Python-
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
  {
    id: 1,
    title: "HTML5 Semantic Structure & Form Controls",
    category: "FRONTEND",
    categoryLabel: "Lab 1",
    subCategory: "BACKEND/lab/lAB1",
    description: "Semantic HTML5 layout, validated form inputs, and native audio/video elements.",
    link: TREE + "BACKEND/lab/lAB1",
    report: "report.html#lab-1",
    sourceReport: BLOB + "BACKEND/lab/lAB1/Report.md",
    tags: ["HTML5", "Forms", "Multimedia"]
  },
  {
    id: 2,
    title: "Core JavaScript Engine & Async Foundations",
    category: "FRONTEND",
    categoryLabel: "Lab 5",
    subCategory: "BACKEND/lab/Lab5/Lab_05_JS_Concepts",
    description: "Execution contexts, closures, prototypes, and Promises in practice.",
    link: TREE + "BACKEND/lab/Lab5/Lab_05_JS_Concepts",
    report: "report.html#lab-2",
    sourceReport: BLOB + "BACKEND/lab/Lab5/Lab_05_JS_Concepts/Report.md",
    tags: ["JavaScript", "Async/Await", "Closures"]
  },
  {
    id: 3,
    title: "DOM Manipulation & Interactive Todo Application",
    category: "FRONTEND",
    categoryLabel: "Lab 7–9",
    subCategory: "BACKEND/lab/Lab7,8,9",
    description: "DOM tree updates, event delegation, and a live todo app in vanilla JS.",
    link: TREE + "BACKEND/lab/Lab7,8,9",
    report: "report.html#lab-3",
    sourceReport: BLOB + "BACKEND/lab/Lab7,8,9/Report.md",
    tags: ["DOM", "Events", "ES6+"]
  },
  {
    id: 4,
    title: "Express Routing & EJS Server-Side Rendering",
    category: "NODE",
    categoryLabel: "Lab 12A",
    subCategory: "BACKEND/lab/Lab12/Lab12A/nodejs-express-lab",
    description: "Route and query params, JSON body parsing, and dynamic EJS pages.",
    link: TREE + "BACKEND/lab/Lab12/Lab12A/nodejs-express-lab",
    report: "report.html#lab-4",
    sourceReport: BLOB + "BACKEND/lab/Lab12/Lab12A/report.md",
    tags: ["Node.js", "Express.js", "EJS"]
  },
  {
    id: 5,
    title: "Sessions & Cookies with Express",
    category: "NODE",
    categoryLabel: "Lab 12B",
    subCategory: "BACKEND/lab/Lab12/LAB12b",
    description: "Stateful HTTP with cookie-parser, express-session, and secure flags.",
    link: TREE + "BACKEND/lab/Lab12/LAB12b",
    report: "report.html#lab-5",
    sourceReport: BLOB + "BACKEND/lab/Lab12/LAB12b/report.md",
    tags: ["express-session", "Cookies", "Security"]
  },
  {
    id: 6,
    title: "MongoDB Persistence with Mongoose CRUD",
    category: "NODE",
    categoryLabel: "Lab 13",
    subCategory: "BACKEND/lab/Lab13/mongoose-demo",
    description: "Mongoose schemas, validation, unique indexes, and async CRUD operations.",
    link: TREE + "BACKEND/lab/Lab13/mongoose-demo",
    report: "report.html#lab-6",
    sourceReport: BLOB + "BACKEND/lab/Lab13/report.md",
    tags: ["MongoDB", "Mongoose", "CRUD"]
  },
  {
    id: 7,
    title: "Django Todo Application with SQLite",
    category: "PYTHON",
    categoryLabel: "Lab 15",
    subCategory: "BACKEND/lab/LAB15",
    description: "Full-stack Django app following MVT, with ORM queries and CSRF protection.",
    link: TREE + "BACKEND/lab/LAB15",
    report: "report.html#lab-7",
    sourceReport: BLOB + "BACKEND/lab/LAB15/report.md",
    tags: ["Django", "Python", "SQLite"]
  },
  {
    id: 8,
    title: "Authentication Flow & Todo Service",
    category: "NODE",
    categoryLabel: "Assignment",
    subCategory: "BACKEND/lab/Assignment/loginpage",
    description: "Session-based login, protected routes, and a persistent todo manager.",
    link: TREE + "BACKEND/lab/Assignment/loginpage",
    report: "report.html#lab-8",
    sourceReport: BLOB + "BACKEND/lab/Assignment/loginpage/README.md",
    tags: ["Express.js", "Auth", "Sessions"]
  }
];

window.EXPERIMENTS_DATA = EXPERIMENTS_DATA;
