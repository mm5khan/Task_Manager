import { useState } from "react";

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);


  return (
    <div className="task">
      <div style={{ flex: 1 }}>
        {isEditing ? (
          <>
            <input className="input" value={title} onChange={e => setTitle(e.target.value)} />
            <div style={{ height:8 }} />
            <textarea className="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
          </>
        ) : (
          <>
            <h3>{task.title}</h3>
            {task.description ? <p>{task.description}</p> : <p className="meta">No description</p>}
          </>
        )}
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "start" }}>
        {isEditing ? (
          <>
            <button className="btn" onClick={save}>Save</button>
            <button className="btn secondary" onClick={() => { setIsEditing(false); setTitle(task.title); setDescription(task.description); }}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn danger" onClick={() => onDelete(task.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}