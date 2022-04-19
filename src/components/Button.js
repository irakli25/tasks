import React from 'react'
import PropTypes from 'prop-types'

const Button = ({title, color, onClick}) => {
  return (
    <button 
    className='btn' 
    style={{backgroundColor: color}}
    onClick = {onClick}
    >{title}</button>
  )
}

Button.defaultProps = {
    title: 'Add',
    color: 'green',
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Button
