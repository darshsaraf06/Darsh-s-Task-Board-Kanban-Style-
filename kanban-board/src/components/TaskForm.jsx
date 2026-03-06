import{useState}from"react";
function TaskForm({setTasks}){
  const[title,setTitle]=useState("");
  const[priority,setPriority]=useState("low");
  const addTask=()=>{
    if(!title.trim())return;
    const newTask={
      id:crypto.randomUUID(),
      title:title,
      description:"",
      status:"todo",
      priority:priority,
    };
    setTasks((prev)=>[...prev,newTask]);
    setTitle("");
    setPriority("low");
  };
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter your task..."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e)=>setPriority(e.target.value)}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
export default TaskForm;