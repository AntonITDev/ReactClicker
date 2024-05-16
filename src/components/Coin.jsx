import React from 'react'

const Coin = ({image, cash, click = 1, onClick = null}) => {

	const handleClick = () => {
		onClick(cash + click)
	}

  return (
	<button className={'coin'} style={{backgroundImage: `url(${image})`}} onClick={handleClick}>
	</button>
  )
}

export default Coin
