import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'



function App() {    
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

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  return (
    <div className="container">
    <Header />
    {tasks.length > 0 ?(<Tasks tasks ={tasks} onDelete={deleteTask}/>) : 
    ('No task to show')
    }
    </div>
  );
}

export default App;



