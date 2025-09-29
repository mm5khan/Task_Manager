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