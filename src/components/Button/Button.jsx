import React from 'react'

const Button = ({icon = null, text='Button', onClick = null}) => {
  return (
	<button className={'button'} onClick={onClick}>
		{icon ? icon : ''}
		{text}
	</button>
  )
}

export default Button
