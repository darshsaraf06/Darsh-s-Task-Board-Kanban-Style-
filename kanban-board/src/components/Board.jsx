import Column from "./Column";
function Board({columns,tasks,setTasks,deleteColumn}){
  return (
    <div className="board">
      {columns.map((column)=>(
        <Column
          key={column.id}
          column={column}
          tasks={tasks.filter((task)=>task.status===column.id)}
          setTasks={setTasks}
          deleteColumn={deleteColumn}
        />
      ))}
    </div>
  );
}
export default Board;