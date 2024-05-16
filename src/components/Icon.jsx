import React from 'react'

const Icon = ({icon, onClick = null, alt=null, classes = ['icon']}) => {
  return (
	<img className={classes.join(' ')} src={icon} onClick={onClick} alt={alt}/>
  )
}

export default Icon
