import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'test test',
      day: 'Feb 5th',
      reminder: true,
  },
  {
      id: 2,
      text: 'test test2',
      day: 'Feb 6th',
      reminder: true,
  },
  {
      id: 3,
      text: 'test test3',
      day: 'Feb 7th',
      reminder: true,
  },
  ]);

  // on delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // on change reminder
  const changeReminder = (id) => {
    const current = tasks.filter((task) => task.id === id);
    console.log(current);
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDeleteTask = {deleteTask}
          onToggle={changeReminder}/>
        ) : ('NO Tasks')}
    </div>
  );
}

export default App;
