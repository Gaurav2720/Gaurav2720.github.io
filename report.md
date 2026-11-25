# Lab Reports — Semester 5 Backend Engineering

**Gaurav Bhaskar** · B.Tech CSE · UPES

A consolidated index of every experiment in the backend engineering laboratory — the aim, what was actually built, the folder that holds the code, and a link to the original write-up.

| | |
|---|---|
| **Live report page** | [report.html](https://gaurav2720.github.io/report.html) |
| **Portfolio** | [gaurav2720.github.io](https://gaurav2720.github.io/) |
| **Source repository** | [Backend-Main-JS-Python-](https://github.com/Gaurav2720/Backend-Main-JS-Python-) |
| **Entries** | 18 — 8 lab practicals, 7 theory/REST builds, 3 systems projects |

---

## Contents

| # | Experiment | Track | Folder |
|---|---|---|---|
| 01 | [HTML5 Semantic Structure & Form Controls](#01--html5-semantic-structure--form-controls) | Lab 1 | `BACKEND/lab/lAB1` |
| 02 | [Core JavaScript Engine & Async Foundations](#02--core-javascript-engine--async-foundations) | Lab 5 | `BACKEND/lab/Lab5/Lab_05_JS_Concepts` |
| 03 | [DOM Manipulation, Events & Todo Application](#03--dom-manipulation-events--todo-application) | Lab 7, 8, 9 | `BACKEND/lab/Lab7,8,9` |
| 04 | [Express Routing & EJS Server-Side Rendering](#04--express-routing--ejs-server-side-rendering) | Lab 12A | `BACKEND/lab/Lab12/Lab12A/nodejs-express-lab` |
| 05 | [Cookies & Express Sessions](#05--cookies--express-sessions) | Lab 12B | `BACKEND/lab/Lab12/LAB12b` |
| 06 | [MongoDB & Mongoose CRUD](#06--mongodb--mongoose-crud) | Lab 13 | `BACKEND/lab/Lab13/mongoose-demo` |
| 07 | [Django Todo Application & SQLite](#07--django-todo-application--sqlite) | Lab 15 | `BACKEND/lab/LAB15` |
| 08 | [Authentication Flow & Todo Service](#08--authentication-flow--todo-service) | Assignment | `BACKEND/lab/Assignment/loginpage` |
| 09 | [Express Server & Dynamic EJS Binding](#09--express-server--dynamic-ejs-binding) | Theory · Class 1 | `BACKEND/TheoryClass/Class1` |
| 10 | [HTTP DevTools & Postman API Testing](#10--http-devtools--postman-api-testing) | Theory · Class 2 | `BACKEND/TheoryClass/Class2` |
| 11 | [FastAPI Initialization & ASGI Lifecycle](#11--fastapi-initialization--asgi-lifecycle) | Theory · Class 3 | `BACKEND/TheoryClass/class3` |
| 12 | [FastAPI REST CRUD with Pydantic](#12--fastapi-rest-crud-with-pydantic) | Theory · Class 4 | `BACKEND/TheoryClass/class4` |
| 13 | [HTTP Cookie Lifecycle & Security Flags](#13--http-cookie-lifecycle--security-flags) | Theory · Class 5 | `BACKEND/TheoryClass/class5` |
| 14 | [Object-Relational Mapping & Abstraction](#14--object-relational-mapping--abstraction) | Unit 2 ORM | `BACKEND/TheoryClass/Unit2/ORM` |
| 15 | [SQLite Schema Design & Dual-Runtime Scripts](#15--sqlite-schema-design--dual-runtime-scripts) | Theory · Class 15 | `BACKEND/TheoryClass/Class15` |
| 16 | [Node.js Containerization with Docker](#16--nodejs-containerization-with-docker) | Docker & DevOps | `BACKEND/class_docker` |
| 17 | [Distributed Event Streaming with Kafka](#17--distributed-event-streaming-with-kafka) | Kafka | `BACKEND/KAFKA` |
| 18 | [Note-Taking & Viva Examination Portal](#18--note-taking--viva-examination-portal) | Examination | `BACKEND/Note-taking-Test-viva` |

---

## Laboratory Practicals

### 01 · HTML5 Semantic Structure & Form Controls

`Lab 1` · `BACKEND/lab/lAB1`

**Aim** — To create a simple web page using HTML5 semantic elements along with basic form, media and multimedia features.

**Built** — The document is structured with `header`, `nav`, `main`, `section`, `article`, `aside` and `footer`. Form work covers input types and validation attributes plus `progress` and `meter`; multimedia work embeds audio and video with playback controls.

`HTML5` `Forms` `Multimedia` `Semantic Web`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/lab/lAB1) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/lab/lAB1/Report.md) · [On this site](report.html#lab-1)

---

### 02 · Core JavaScript Engine & Async Foundations

`Lab 5` · `BACKEND/lab/Lab5/Lab_05_JS_Concepts`

**Aim** — To demonstrate JavaScript arrays, objects and functions, and to understand scoping, closures, prototypes and the event loop.

**Built** — Array initialisation and manipulation, object property access, function declaration versus expression patterns, and asynchronous behaviour traced through callbacks, Promises and `async/await`. Closures and prototype inheritance explain lexical scope and shared behaviour.

`JavaScript` `Arrays` `Objects` `Async/Await`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/lab/Lab5/Lab_05_JS_Concepts) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/lab/Lab5/Lab_05_JS_Concepts/Report.md) · [On this site](report.html#lab-2)

---

### 03 · DOM Manipulation, Events & Todo Application

`Lab 7, 8, 9` · `BACKEND/lab/Lab7,8,9`

**Aim** — To understand and apply ES6 features, DOM manipulation and event handling in order to build interactive web pages.

**Built** — `let`/`const`, arrow functions, template literals, destructuring, spread/rest, classes and promises. DOM traversal, node creation and removal, bubbling and event delegation, assembled into an interactive Todo application with live state updates.

`ES6` `DOM` `Events` `Todo App`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/lab/Lab7,8,9) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/lab/Lab7,8,9/Report.md) · [On this site](report.html#lab-3)

---

### 04 · Express Routing & EJS Server-Side Rendering

`Lab 12A` · `BACKEND/lab/Lab12/Lab12A/nodejs-express-lab`

**Aim** — To build and configure a backend web server with Node.js and Express.js, demonstrating the request–response cycle, routing, route and query parameters, body parsing and EJS server-side templating.

**Built** — Express configured with `express.json()` and `express.urlencoded()`, GET and POST routes, dynamic parameters (`/user/:id`, `/product/:category/:id`) and query handling (`/search`, `/calculate`). Responses ranged from plain text to JSON to rendered EJS views, with deliberate HTTP status codes.

`Node.js` `Express.js` `EJS` `Routing` `SSR`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/lab/Lab12/Lab12A/nodejs-express-lab) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/lab/Lab12/Lab12A/report.md) · [On this site](report.html#lab-4)

---

### 05 · Cookies & Express Sessions

`Lab 12B` · `BACKEND/lab/Lab12/LAB12b`

**Aim** — To implement state management in Express.js using client-side cookies via `cookie-parser` and server-side sessions via `express-session`.

**Built** — Cookies created, read and destroyed with `maxAge`, `httpOnly` and `secure` flags; incoming `req.cookies` inspected; signed server-side sessions established; state torn down with `res.clearCookie()` and session destruction.

`Cookies` `Sessions` `State` `Security`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/lab/Lab12/LAB12b) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/lab/Lab12/LAB12b/report.md) · [On this site](report.html#lab-5)

---

### 06 · MongoDB & Mongoose CRUD

`Lab 13` · `BACKEND/lab/Lab13/mongoose-demo`

**Aim** — To design and implement MongoDB persistence in a Node.js/Express application using the Mongoose ODM, covering schema definitions, field validation, unique indexing, asynchronous CRUD and error handling.

**Built** — A strict user schema with required and unique validation, MongoDB connection, and create/read/update/delete flows using `async/await` with structured error handling around duplicate keys and failed validation.

`MongoDB` `Mongoose` `CRUD` `NoSQL`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/lab/Lab13/mongoose-demo) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/lab/Lab13/report.md) · [On this site](report.html#lab-6)

---

### 07 · Django Todo Application & SQLite

`Lab 15` · `BACKEND/lab/LAB15`

**Aim** — To build a full-stack Todo application with the Python Django framework, following the Model-View-Template architecture with SQLite persistence and ORM queries.

**Built** — `todo_project` scaffolded with a dedicated `todo` application, tasks modelled in SQLite through Django's ORM, URL routing and views wired, templates rendered, and CSRF-protected form submissions handled in a responsive interface.

`Django` `Python` `SQLite` `MVT` `ORM`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/lab/LAB15) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/lab/LAB15/report.md) · [On this site](report.html#lab-7)

---

### 08 · Authentication Flow & Todo Service

`Lab Assignment` · `BACKEND/lab/Assignment/loginpage`

**Aim** — To build an end-to-end, session-based authentication flow in Express with protected routes and an integrated todo service.

**Built** — Registration and login with hashed credentials, session tracking, authentication middleware guarding private routes, logout teardown, and a persistent todo list scoped to the signed-in user. The project README serves as the written report.

`Express.js` `Auth` `Sessions` `EJS`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/lab/Assignment/loginpage) · [Project README](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/lab/Assignment/loginpage/README.md) · [On this site](report.html#lab-8)

---

## Theory & REST API Builds

### 09 · Express Server & Dynamic EJS Binding

`Theory · Class 1` · `BACKEND/TheoryClass/Class1`

**Aim** — To configure Express with the EJS view engine and bind a student dataset to dynamic templates through modular routing.

**Built** — View engine and views directory configured, route controllers created, and a collection of student records rendered into EJS pages. No standalone report was written — the working code is the record.

`Express.js` `EJS` `Routing` `Node.js`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/TheoryClass/Class1) · *No standalone report · code only* · [On this site](report.html#lab-9)

---

### 10 · HTTP DevTools & Postman API Testing

`Theory · Class 2` · `BACKEND/TheoryClass/Class2`

**Aim** — To inspect HTTP traffic in browser DevTools and validate REST endpoints with Postman.

**Built** — Request and response headers analysed, status-code families (2xx, 4xx, 5xx) and payload shapes examined, then Postman collections built to repeat the same checks. No standalone report was written.

`HTTP` `Postman` `DevTools` `API Testing`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/TheoryClass/Class2) · *No standalone report · code only* · [On this site](report.html#lab-10)

---

### 11 · FastAPI Initialization & ASGI Lifecycle

`Theory · Class 3` · `BACKEND/TheoryClass/class3`

**Aim** — To initialise a Python virtual environment and run a minimal FastAPI application on an ASGI server.

**Built** — Virtual environment created, FastAPI and Uvicorn installed, first endpoints defined, and the live-reloading development server run while inspecting the generated docs. No standalone report was written.

`FastAPI` `Python` `ASGI` `Uvicorn`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/TheoryClass/class3) · *No standalone report · code only* · [On this site](report.html#lab-11)

---

### 12 · FastAPI REST CRUD with Pydantic

`Theory · Class 4` · `BACKEND/TheoryClass/class4`

**Aim** — To build a RESTful CRUD API in FastAPI with Pydantic request validation.

**Built** — Request and response schemas modelled with `BaseModel`, CRUD routes implemented, path and query filtering added, and the auto-generated OpenAPI documentation used to verify contracts. No standalone report was written.

`FastAPI` `Pydantic` `REST API` `Validation`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/TheoryClass/class4) · *No standalone report · code only* · [On this site](report.html#lab-12)

---

### 13 · HTTP Cookie Lifecycle & Security Flags

`Theory · Class 5` · `BACKEND/TheoryClass/class5`

**Aim** — To demonstrate the HTTP cookie lifecycle in Express and apply security flags.

**Built** — Cookies set with `maxAge`, `httpOnly` and `secure`, read on later requests, and cleared with `res.clearCookie()`. Covered how `httpOnly` limits XSS exposure and how `secure` restricts transport. No standalone report was written.

`Cookies` `Express.js` `Security` `HttpOnly`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/TheoryClass/class5) · *No standalone report · code only* · [On this site](report.html#lab-13)

---

### 14 · Object-Relational Mapping & Abstraction

`Unit 2 ORM` · `BACKEND/TheoryClass/Unit2/ORM`

**Aim** — To understand Object-Relational Mapping and how it abstracts relational queries behind object interfaces.

**Built** — Model mapping, relationships, transaction handling, and the trade-offs between raw SQL and ORM abstractions. No standalone report was written for this unit.

`ORM` `Data Modeling` `SQL/NoSQL`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/TheoryClass/Unit2/ORM) · *No standalone report · code only* · [On this site](report.html#lab-14)

---

### 15 · SQLite Schema Design & Dual-Runtime Scripts

`Theory · Class 15` · `BACKEND/TheoryClass/Class15`

**Aim** — To model a relational schema for an e-commerce system and implement it with SQLite across Node.js and Python runtimes.

**Built** — The conceptual data model — Customer, Product, Cart, Order and the CartItem junction — then `students_lab.db` created, a blog application built in Node.js, and student-management scripts written in Python against the same database.

`SQLite` `Data Modeling` `Node.js` `Python`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/TheoryClass/Class15) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/TheoryClass/Class15/report.md) · [On this site](report.html#lab-15)

---

## Systems & Distributed Architecture

### 16 · Node.js Containerization with Docker

`Docker & DevOps` · `BACKEND/class_docker`

**Aim** — To containerise a Node.js backend service with Docker and reproduce the runtime environment on any machine.

**Built** — A Dockerfile written for the service, the image built and run, bind mounts configured for hot reloading, and container networking and logs inspected. The folder holds the runnable source rather than a separate write-up.

`Docker` `Containers` `DevOps` `Microservices`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/class_docker) · *No standalone report · code only* · [On this site](report.html#lab-16)

---

### 17 · Distributed Event Streaming with Kafka

`Kafka` · `BACKEND/KAFKA`

**Aim** — To demonstrate asynchronous, event-driven communication between services with Apache Kafka.

**Built** — The order service published events to a Kafka topic and replied immediately with HTTP 202; inventory and notification services consumed those events independently. The demo shows eventual consistency, service decoupling and fault tolerance, since events wait in Kafka while a consumer is down.

`Kafka` `Event-Driven` `Distributed Systems` `Docker Compose`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/KAFKA) · [Project README](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/KAFKA/README.md) · [On this site](report.html#lab-17)

---

### 18 · Note-Taking MIDSEM

`Examination` · `BACKEND/Note-taking-Test-viva`

**Aim** — To build a full-stack note-taking and viva examination portal with Node.js, Express, EJS and MongoDB Atlas.

**Built** — Project structure, backend routes, note CRUD and templated views implemented, then the complete build documented step by step — setup, dependencies, folder structure, server file and views — in the lab report.

`Node.js` `Express` `MongoDB Atlas` `EJS` `Full-Stack`

[Code folder](https://github.com/Gaurav2720/Backend-Main-JS-Python-/tree/master/BACKEND/Note-taking-Test-viva) · [Report](https://github.com/Gaurav2720/Backend-Main-JS-Python-/blob/master/BACKEND/Note-taking-Test-viva/Testreport.md) · [On this site](report.html#lab-18)

---

## Notes

- Entries **09–14** and **16** have no separate report file in the repository; the working code is the record.
- Entry **08** uses the project `README.md` as its written report.
- The styled, browsable version of this index is [report.html](report.html).

[← Back to the portfolio](index.html) · [Backend repository](https://github.com/Gaurav2720/Backend-Main-JS-Python-)
