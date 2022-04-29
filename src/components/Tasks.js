import React from 'react'
import Task from './Task'
const Tasks = ({tasks, onDeleteTask, onToggle}) => {
  const onToggle1 = () => {
    console.log('here');
  }

  return (
      <>
        {tasks.map((item) => (
            <Task 
              key={item.id} 
              task={item} 
              deleteTask={onDeleteTask}
              />
        ))}
      </>
    
  )
}





Tasks.propTypes = {}

export default Tasks