import {React, useState, Fragment, useRef} from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import UpgradeButton from '../Button/UpgradeButton';


const WindowShop = ({dispatch, checkUpgrade, ...props}) => {
	const cash = useSelector(state => state.cash)
	const upgradeClickCost = useSelector(state => state.upgradeClickCost)

	const shopClosed = useSelector(state => state.shopClosed)

	const toggleDrawer = () => (event) => {
		dispatch({type: 'OPEN_SHOP', payload: !shopClosed})
		checkUpgrade()
	};

	function upgradeClick() {
		const costCoefficien = 0.4

		if (cash >= upgradeClickCost) {
			dispatch({type: 'GET_CASH', payload: upgradeClickCost})
			dispatch({type: 'SET_CLICK', payload: 1})
			dispatch({type: 'SET_UPGRADE_CLICK_COST', payload: upgradeClickCost + Math.floor(upgradeClickCost * costCoefficien)})
		}
	}

	const list = () => (
		<Box
			sx={{ width: "100%"}}
			role="presentation"
		>
			<List>
				<UpgradeButton text={'Click +1'} cost={upgradeClickCost} action={upgradeClick}/>
			</List>
			<Divider />
			
		</Box>
	);

	
	return (
		<div>
		  {['bottom'].map((anchor) => (
			<Fragment key={anchor}>
					<Drawer
					anchor={anchor}
					open={shopClosed}
					onClose={toggleDrawer()}>
						{list()}
					</Drawer>
			</Fragment>
		))}
		</div>
	);
}

export default WindowShop