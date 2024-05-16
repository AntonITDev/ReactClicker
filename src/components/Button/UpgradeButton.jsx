import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const UpgradeButton = ({text, cost, action}) => {
  return (
	<ListItem key={text} disablePadding onClick={action}>
		<ListItemButton>
			<ListItemText sx={{textAlign: "center", textTransform: "uppercase"}} primary={text + ` (${cost})`} />
		</ListItemButton>
	</ListItem>
  )
}

export default UpgradeButton
