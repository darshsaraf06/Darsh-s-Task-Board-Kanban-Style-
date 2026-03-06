import { useState, useEffect } from "react";
import Board from "./components/Board";
import TaskForm from "./components/TaskForm";
function App() {
  const[tasks,setTasks]=useState(()=>{
    const saved=localStorage.getItem("kanbanTasks");
    return saved ? JSON.parse(saved):[];
  });
  const[theme,setTheme]=useState("light");
  const toggleTheme=()=>{
  const newTheme=theme==="light"?"dark":"light";
  setTheme(newTheme);
  document.body.className=newTheme;
};
const[columns,setColumns]=useState(()=>{
  const saved=localStorage.getItem("kanbanColumns");
  return saved
    ? JSON.parse(saved)
    : [
        {id:"todo",title:"Todo",custom:false},
        {id:"inprogress",title:"In Progress",custom:false},
        {id:"done",title:"Done",custom:false}
      ];
});
  useEffect(()=>{
    localStorage.setItem("kanbanTasks",JSON.stringify(tasks));
  },[tasks]);
  useEffect(()=>{
    localStorage.setItem("kanbanColumns",JSON.stringify(columns));
  },[columns]);
  const addColumn=()=>{
    const name=prompt("Enter column name:");
    if (!name) return;
    const newColumn={
      id: name.toLowerCase().replace(/\s+/g, "-"),
      title: name,
      custom: true
    };
  setColumns((prev)=>[...prev, newColumn]);
  };
  const deleteColumn=(columnId)=>{
  const confirmDelete=window.confirm(
    "Are you sure you want to delete this column and all its tasks?"
  );
  if (!confirmDelete) return;
  setTasks((prev)=>
    prev.filter((task)=>task.status!==columnId)
  );
  setColumns((prev)=>
    prev.filter((col)=>col.id!==columnId)
  );
};
  return(
    <div className="app">
      <h1>Darsh's task Board</h1>
      <div className="top-buttons">
      <button onClick={toggleTheme}>Change Theme</button>
      <button onClick={addColumn}>
        + Add Column
      </button>
      </div>
      <TaskForm setTasks={setTasks} />
      <Board
        columns={columns}
        tasks={tasks}
        setTasks={setTasks}
        deleteColumn={deleteColumn}
      />
    </div>
  );
}
export default App;