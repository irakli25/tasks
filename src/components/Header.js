import React from 'react'
import Button from './Button'

import PropTypes from 'prop-types'

const Header = ({title}) => {
    const onclick = () => {

    }
  return (
      <header className='header'>
        <h1>{title}</h1>
        <Button />
      </header>

  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header