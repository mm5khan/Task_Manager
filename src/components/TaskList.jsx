import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onUpdate, onDelete }) {
  if (!tasks.length) {
    return <div className="card meta">No tasks yet. Add one above.</div>;
  }
  return (
    <div className="card">
      <h2 style={{marginTop:0}}>Tasks</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {tasks.map(t => (
          <TaskItem key={t.id} task={t} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}