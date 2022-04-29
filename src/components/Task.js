import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';

const Task = ({task, deleteTask, onToggle}) => {
  let clickCounter = 0;
  const handleDoubleClick = (e) => {
    console.log(e,e.target, clickCounter);
    clickCounter ++;
    setTimeout(() => {
      clickCounter = 0;
    }, 200);
    if(clickCounter === 2){
      console.log('throw');
      document.dispatchEvent(new Event('onDouble', {"bubbles":true}));
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

const test = () => {
  console.log('te');
}
document.addEventListener('onDouble',test, false);

export default Task