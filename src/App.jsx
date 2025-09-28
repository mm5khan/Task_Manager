import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
  (async () => {
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  })();
}, []);

  async function handleAdd(payload) {
    const created = await createTask(payload);
    setTasks(prev => [created, ...prev]);
  }

  async function handleUpdate(id, payload) {
    const updated = await updateTask(id, payload);
    setTasks(prev => prev.map(t => (t.id === id ? updated : t)));
  }

  async function handleDelete(id) {
    await deleteTask(id);
    setTasks(prev => prev.filter(t => t.id !== id));
  }

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