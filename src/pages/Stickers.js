import { useState } from 'react';
function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input placeholder="Add task" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => { setTitle(''); onAddTask(title);}}>Add</button>
    </>
  )
}
function TaskList({tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}> <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} /></li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  
  let taskContent;
  let taskbuttons;
  if (isEditing) { 
    taskContent = (<input value={task.title} onChange={e => { onChange({ ...task, title: e.target.value }); }} 
                    onKeyDown={ e=> {if(e.key==="Enter"){setIsEditing(false)}}} />);
    taskbuttons = (<button onClick={() => setIsEditing(false)}>Save</button>);
  } else {
    taskContent = (<h1 style={{width:"50%"}}>{task.title}</h1>);
    taskbuttons = (<button onClick={() => setIsEditing(true)}>Edit</button>);
  }
  if (task.tab === tab){
  return (
    <div id="Task" style={{display:"flex", flexDirection: "row", alignItems: "center", overflowWrap: "break-word", justifyContent: "space-between"}}>
    {taskContent}
    <div>
    <input type="number" defaultValue={task.number} onChange={e => { onChange({ ...task, number: e.target.value }); }} style={{width: "40px"}}></input>
    X
    <input type="number" value={task.points} onChange={e => { onChange({ ...task, points: e.target.value }); }} style={{width: "40px"}}></input>
    =
    <input type="number" value={task.points*task.number} readOnly style={{width: "40px"}}></input>
    {taskbuttons}
    <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
    </div>
  );
  }
}

function getWeek(date) {
  var onejan = new Date(date.getFullYear(), 0, 1);
  var week = Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1) / 7);
  return week + (date.getFullYear()-2026)*52
}

/*
const initialTasks = [
  { id: 0, title: 'Buy milk', numbers: {'1:0':3}, points: 10, tab: 'Health'},
  { id: 1, title: 'Eat tacos', numbers: {'1:0':5}, points: 6, tab: 'Health' },
  { id: 2, title: 'Brew tea', numbers: {'1:0':4}, points: 8, tab: 'Health' },
]; 
*/
const initialTasks = JSON.parse(localStorage.getItem("Tasks"));
let nextTaskId = initialTasks.length

const initialTabs = ["Health","Social"]
//const initialTabs = JSON.parse(localStorage.getItem("Tabs"));



let saved = true
let date = new Date()
let tab = initialTabs[0]

function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  console.log(getWeek(date), date.getDay())
  let stringDate = JSON.stringify(getWeek(date))+":"+JSON.stringify(date.getDay())
  function handleAddTask(title) {setTasks([...tasks,{id: nextTaskId++, title: title, 
    numbers: {stringDate: 0}, points: 0}]); saved=false;}

  function handleChangeTask(nextTask) {
    setTasks(tasks.map(t => {
      if (t.id === nextTask.id) {return nextTask;} else {return t;}
    }));
    saved = false
  }

  function handleDeleteTask(taskId) {setTasks(tasks.filter(t => t.id !== taskId)); saved = false;}

  function SaveAllTasks(el){
    localStorage.setItem('Tasks', JSON.stringify(tasks));
    saved = true;
  }
  
  const preventLeaving = (e) => {
    if (structuredClone(saved) === false){ e.preventDefault();  }
  }
  window.addEventListener('beforeunload', preventLeaving);

 
  return (
    <>
    <div id="TaskTitle" style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
     <h1>Health Tasks</h1>   
     <h1 onMouseDown={SaveAllTasks}>Save</h1>
    </div>
    
    <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    <AddTask onAddTask={handleAddTask}/>
    </>
  );
}





function StickersApp() {
    return (
    <div id="AppContainer" style={{border: "solid", height: "700px"}}>
        <div id="Title" style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div id="TodayDate">
                <h1>Today's Points!</h1>
            </div>

            <div id="ViewStats">
                <h2>View All Stats</h2></div>
        </div>
        <div id="MainSection" style={{display:"flex", flexDirection: "row"}}>
            <div id="ListOfTasks" style={{display:"flex", flexDirection: "column", resize: "horizontal", 
                border: "solid", overflowY: "scroll", maxHeight: "600px", justifyContent: "space-between"}}>
                <TaskApp></TaskApp>
            </div>
            <div id="GraphSection">
                <div id="Graph"></div>
            </div>
        </div>
        <div id="Tabs">
 
        </div>
    </div>
    )
}

export default StickersApp;