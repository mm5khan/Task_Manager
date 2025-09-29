# Task Manager (React + Express)

A minimalist full-stack Task Manager using React (Vite) and Express. It demonstrates CRUD, a simple REST API, in-memory storage (no DB), and clean component structure—perfect for a quick demo or coding challenge.

## Features
- Create • Read • Update • Delete tasks
- React SPA with hooks (useState, useEffect)
- REST API (Express) with CORS (or Vite proxy)
- In-memory storage (resets on server restart)
- Simple styling + easy theming

## Tech Stack
**Frontend**: React (Vite), Fetch or Axios
**Backend**: Node.js, Express, CORS, morgan, nanoid (IDs)

## Project Structure
```
root/
├─ backend/
│  ├─ server.js
│  └─ package.json
├─ client/
│  ├─ index.html
│  ├─ vite.config.js
│  ├─ package.json
│  └─ src/
│     ├─ App.jsx
│     ├─ App.css
│     ├─ api.js
│     └─ components/
│        ├─ TaskForm.jsx
│        ├─ TaskItem.jsx
│        └─ TaskList.jsx
└─ README.md
```

## Quick Start 
1. Backend 
```
cd backend
npm install
npm run dev 
```
2. Frontend
```
cd client
npm install
npm run dev 
```

## API Reference
### Task Object 
```
{
  "id": "string",
  "title": "string",
  "description": "string"
}
```
### Endpoints
- `GET /api/tasks` → returns `[Task]`
- `POST /api/tasks` → `body: { "title": "Buy milk", "description": "optional" }` → `201 Task`
- `PUT /api/tasks/:id` → `body: { "title"?: "...", "description"?: "..." }` → `200 Task`
- `DELETE /api/tasks/:id` → `200 Task`

## Design Notes
- State ownership: `App.jsx` holds tasks; children receive data + callbacks.
- API layer: `api.js` isolates network calls and error handling.
- Validation: Frontend trims titles; backend enforces types (adjust as needed).
- In-memory store: Simple by spec; easy to swap for a DB later.

## Troubleshooting 
- Cannot PUT /api/tasks → Use `/api/tasks/:id` (include an ID) and hit the right port (3000), or configure the Vite proxy.
- CORS error → Enable CORS on Express or use the Vite proxy setup above.
- Loading stuck → Ensure you call `setLoading(false)` or remove the loading state entirely.
- Invalid Date → Don’t render timestamps if you removed them from the model.
- Port in use → `npm run dev -- --port 5174` (frontend) or change the backend port.