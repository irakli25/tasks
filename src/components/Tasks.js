import React from 'react'
import Task from './Task'
const Tasks = ({tasks}) => {
  return (
      <>
        {tasks.map((item) => (
            <Task key={item.id} task={item} />
        ))}
      </>
    
  )
}

Tasks.propTypes = {}

export default Tasks