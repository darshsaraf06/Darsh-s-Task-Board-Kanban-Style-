function TaskCard({task,setTasks}){
  const handleDelete=()=>{
    setTasks((prev)=>prev.filter((t)=>t.id!==task.id));
  };
  const handleEdit=()=>{
    const newTitle=prompt("Edit Task Title:",task.title);
    if(newTitle&&newTitle.trim()!==""){
      setTasks((prev)=>
        prev.map((t)=>
          t.id===task.id?{...t,title:newTitle}:t
        )
      );
    }
  };
  const getPriorityClass=()=>{
    return`priority-${task.priority||"low"}`;
  };
  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e)=>e.dataTransfer.setData("taskId",task.id)}
    >
      <div className="task-header">
        <h4>{task.title}</h4>
        <span className={getPriorityClass()}>
          {(task.priority||"low").toUpperCase()}
        </span>
      </div>
      <div className="task-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
export default TaskCard;