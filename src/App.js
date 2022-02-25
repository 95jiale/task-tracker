import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'



function App() {  
  const [showAddTask,setShowAddTask]  = useState (false)
  const [tasks, setTasks] = useState([
  {
      id : 1,
      text : 'Doc appt',
      day : 'Feb 5th',
      reminder : true,
  },
  {
      id : 2,
      text : 'Grocery shopping',
      day : 'Feb 7th',
      reminder : true,
  },
  {
      id : 3,
      text : 'Dental appt',
      day : 'Feb 5th',
      reminder : true,
  },
  {
      id : 4,
      text : 'Clubbing night',
      day : 'Feb 18th Night',
      reminder : true,
  },
  {
      id : 5,
      text : 'Dinner alone',
      day : 'Feb 21th',
      reminder : false,
  },
]
)
  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id)) //ask jh
  }
  // Toggle remind
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder : !task.reminder} : task)) //ask jh
  }

  return (
    <div className="container">
    <Header onAdd = {() => setShowAddTask
    (!showAddTask)} showAdd = {showAddTask}
    />
    {showAddTask && <AddTask onAdd ={addTask} />}
    {tasks.length > 0 ?(<Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 
    ('No task to show')
    }
    </div>
  );
}

export default App;



