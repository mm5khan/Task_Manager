import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  return (
    <div className="container">
      <header style={{marginBottom:16}}>
        <h1 style={{margin:"0 0 6px"}}>Task Manager</h1>
        <div className="meta">React + Express • In-memory CRUD</div>
      </header>

      {err && <div className="card" style={{borderColor:"#6a2e2e", background:"#351717"}}>{err}</div>}

      <TaskForm onAdd={handleAdd} />
      <hr className="sep" />
      <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}