import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 style={{marginTop:0}}>Add Task</h2>
      <div className="row">
        <input
          className="input"
          placeholder="Title*"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      
      <div style={{marginTop:12, display:"flex", gap:8}}>
        <button className="btn" type="submit">Create</button>
      </div>
    </form>
  );
}