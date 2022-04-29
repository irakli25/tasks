import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';

const Task = ({task, deleteTask, onToggle}) => {
  let clickCounter = 0;
  const handleDoubleClick = (e) => {
    clickCounter += e.detail;
    setTimeout(() => {
      clickCounter = 0;
    }, 200);
    if(clickCounter === 2){
      console.log('doubleCick');
    }
    
  }
  return (
    <div className='task' onClick = {handleDoubleClick}>
        <h3>{task.text} <FaTimes style={{color:'red', cursor: 'pointer'}} 
        onClick={() => deleteTask(task.id)} /></h3>
        <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Task