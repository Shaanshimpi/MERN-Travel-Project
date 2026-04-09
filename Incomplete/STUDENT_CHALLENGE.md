# Wanderlog Incomplete — Student challenge

This folder is the **same MERN project** as the **Complete** reference, but about **45%** of the JavaScript/JSX logic has been replaced with `// TODO(student):` comments and safe stubs so the app **still compiles and runs**. Your job is to restore the behavior by writing the missing code.

## What you need

- **Node.js** and **npm** installed.
- **MongoDB** connection string in `server/.env` as `MONGO_URI` (same setup as Complete).
- Optional: `client/.env` with `VITE_API_BASE` if your API is not at `http://localhost:5000/api`.

## How to run

1. **Terminal 1 — API**

   ```bash
   cd server
   npm install
   npm start
   ```

2. **Terminal 2 — Client**

   ```bash
   cd client
   npm install
   npm run dev
   ```

3. Open the app in the browser. Expect some features to behave like “empty” or “wrong” until you complete the TODOs.

## Reference project

Use the **Complete** repo **only as a reference** (same file names and routes). Compare the same file side by side when you are stuck. Do not copy without understanding—your goal is to practice `fetch`, React state, and Express/Mongoose patterns.

## Search for your work

In VS Code / Cursor: search the workspace for:

```text
TODO(student)
```

Every match is a task. Read the comment above or beside the stub; it describes what to implement.

---

## Suggested order (beginner-friendly)

Work in this order so you see results early and build on them.

### 1. Loading admin lists

| File | What to fix |
|------|-------------|
| `client/src/pages/AdminCategories.jsx` | Implement `loadCategories` so the table fills from the API, and complete delete flow so rows refresh. |
| `client/src/pages/AdminBlogs.jsx` | Same idea for blogs: load list and delete with refresh. |
| `client/src/pages/AdminDestinations.jsx` | Same idea for destinations: load list and delete with refresh. |

### 2. Simple create forms

| File | What to fix |
|------|-------------|
| `client/src/pages/AdminCategoryCreate.jsx` | Make the input controlled (value + onChange), then POST the new category and go back to the list. |
| `client/src/pages/AdminDestinationCreate.jsx` | Make the input controlled, then POST the new destination and navigate back. |

### 3. Edit forms — load existing row and save

| File | What to fix |
|------|-------------|
| `client/src/pages/AdminCategoryEdit.jsx` | On mount, GET one category by `id`, bind input to `name` state, then PUT the updated value on submit. |
| `client/src/pages/AdminDestinationEdit.jsx` | GET one destination by `id`, bind input to state, then PUT and navigate back on submit. |

### 4. Blog admin — create and edit

| File | What to fix |
|------|-------------|
| `client/src/pages/AdminBlogCreate.jsx` | Load category/destination options, restore controlled bindings in JSX (`value`, `checked`, `onChange`, option maps), and POST full form data. |
| `client/src/pages/AdminBlogEdit.jsx` | Restore full controlled-form JSX bindings, load existing blog/select options, and submit PUT updates. |

### 5. Public blog filters (React)

| File | What to fix |
|------|-------------|
| `client/src/pages/Blogs.jsx` | Implement `filteredBlogs`, render category/destination options, and render blog cards from `filteredBlogs.map(...)`. |

### 6. API — blog list filters (optional but recommended after step 5)

| File | What to fix |
|------|-------------|
| `server/routes/blogs.js` | Implement `GET /`, `GET /trending`, `GET /featured`, `POST /`, `PUT /:id`, and `DELETE /:id`. |
| `server/routes/categories.js` | Implement `GET /`, `POST /`, `PUT /:id`, and `DELETE /:id`. |
| `server/routes/destinations.js` | Implement `GET /`, `POST /`, `PUT /:id`, and `DELETE /:id`. |

> **Note:** The Blogs page filtering is done in the **browser** from the full list. Server tasks in step 6 focus on core CRUD route behavior.

---

## How you know you are done

- **Admin home:** Seed and Delete all already work and show server messages.
- **Admin lists:** Categories, blogs, and destinations tables show data after refresh (and after seed), including delete flows.
- **Create / edit:** New and updated records appear in the admin tables and behave like Complete.
- **Blogs page:** Search + dropdown filters work, and blog cards/options render exactly like Complete.
- **Server (if you did step 6):** Blog/category/destination routes return real MongoDB data and handle full CRUD paths used in this project.

No TypeScript errors are required (this project uses JSX). The client and server should start without syntax errors.

---

## Tips

- Use `async/await` or `.then()` consistently; both are fine if you handle errors.
- For `fetch` with JSON: set `Content-Type: application/json` and use `JSON.stringify` on the body for POST/PUT.
- After DELETE or POST/PUT in admin lists, the code often calls `loadX()` again—keep that pattern.
- If something fails silently, open the browser **Network** tab and the server console for errors.

Good luck.
