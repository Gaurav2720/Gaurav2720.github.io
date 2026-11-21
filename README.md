# Gaurav Bhaskar — Backend Engineering Portfolio

A hand-built portfolio for my Semester 5 backend engineering work: 18 experiments spanning HTML5 and JavaScript fundamentals, Express and EJS, MongoDB, Django, FastAPI, SQLite, Kafka and Docker.

**Live site** → [gaurav2720.github.io](https://gaurav2720.github.io/)
**Lab reports** → [gaurav2720.github.io/report.html](https://gaurav2720.github.io/report.html)
**Code repository** → [Backend-Main-JS-Python-](https://github.com/Gaurav2720/Backend-Main-JS-Python-)

---

## What's here

| Page | Purpose |
|---|---|
| `index.html` | Homepage — hero, about, stats, filterable lab grid, process, contact |
| `report.html` | Report index — 18 entries with aim, build notes, tags and source links |
| `report.md` | The same index as plain Markdown for GitHub reading |
| `data/experiments.js` | Single source of truth for all 18 experiments |
| `script.js` | Renders cards, filters, search and counters from that data |
| `style.css` | Full design system — layout, type, components, responsive rules |

## The experiments

**Laboratory practicals** — HTML5 semantics and forms (Lab 1), JavaScript core and async (Lab 5), DOM, events and a Todo app (Labs 7–9), Express routing and EJS (Lab 12A), cookies and sessions (Lab 12B), MongoDB with Mongoose (Lab 13), Django and SQLite (Lab 15), and a session-authenticated todo service (Assignment).

**Theory and REST builds** — Express with dynamic EJS (Class 1), HTTP inspection and Postman (Class 2), FastAPI setup (Class 3), FastAPI CRUD with Pydantic (Class 4), cookie lifecycle and security flags (Class 5), ORM concepts (Unit 2), and SQLite schema design across Node.js and Python (Class 15).

**Systems and distributed architecture** — Docker containerization, Kafka event streaming with decoupled order/inventory/notification services, and a full-stack note-taking and viva portal on MongoDB Atlas.

Each card links to its code folder and to its report. Entries without a standalone write-up say so explicitly and link to the code instead.

## Design

Near-black canvas, cream content blocks and a burnt-orange accent. Anton for display type, Inter for body copy, JetBrains Mono for labels and metadata. No frameworks, no build step — plain HTML, CSS and JavaScript, served straight from GitHub Pages.

## Run it locally

```bash
git clone https://github.com/Gaurav2720/Gaurav2720.github.io.git
cd Gaurav2720.github.io
```

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating the lab list

All content lives in `data/experiments.js`. Add or edit an object in `EXPERIMENTS_DATA`:

```js
{
  id: 19,
  title: "Experiment title",
  category: "LAB",            // LAB | THEORY | SYSTEMS
  categoryLabel: "Lab 16",
  subCategory: "BACKEND/lab/...",
  description: "One or two sentences on what was built.",
  link: TREE + "BACKEND/lab/...",
  report: "report.html#lab-19",
  sourceReport: BLOB + "BACKEND/lab/.../report.md",  // or null
  tags: ["Tag", "Tag"]
}
```

Then add the matching `<article class="report-entry" id="lab-19">` block to `report.html` and an entry to `report.md`. Bump the `?v=` query on the CSS and JS links in `index.html` when styles change so browsers pick up the new files.

## Contact

- GitHub — [@Gaurav2720](https://github.com/Gaurav2720)
- Course material — [UPES SOCS lectures](https://upessocs.github.io/#dir=/Lectures/Backend%20Development/&file=list.txt)

---

© Gaurav Bhaskar · B.Tech CSE · UPES
