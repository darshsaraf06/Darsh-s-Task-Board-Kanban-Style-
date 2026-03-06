import TaskCard from "./TaskCard";
function Column({column,tasks,setTasks,deleteColumn}){
  const handleDrop=(e)=>{
    const taskId=e.dataTransfer.getData("taskId");
    setTasks((prev)=>
      prev.map((task)=>
        task.id===taskId?{...task,status:column.id}:task
      )
    );
  };
  return(
    <div
      className="column"
      onDragOver={(e)=>e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="column-header">
        <h2>{column.title}</h2>
        {column.custom && (
          <button
            className="delete-column-btn"
            onClick={()=>deleteColumn(column.id)}
          >
            Delete Column
          </button>
        )}
      </div>
      {tasks.map((task)=>(
        <TaskCard key={task.id} task={task} setTasks={setTasks}/>
      ))}
    </div>
  );
}
export default Column;