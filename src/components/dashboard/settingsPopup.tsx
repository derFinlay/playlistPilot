import Button from '@mui/material/Button';
import React from 'react';
import Popup from '../popup';
import { Box } from '@mui/material';

interface settingsPopupProps {
	showPopup: boolean;
	closePopup(): any;
}

const settingsPopup = ({ showPopup, closePopup }: settingsPopupProps) => {
	return (
		<Popup showPopup={showPopup} closePopup={closePopup}>
			<Box
				sx={{
					padding: '',
					position: 'relative',
					width: '100%',
					display: 'flex',
					justifyContent: 'flex-end',
				}}
			>
				<Button variant="contained" color="success" sx={{ mx: '15px' }}>
					Save
				</Button>
				<Button variant="outlined" color="error">
					Cancel
				</Button>
			</Box>
		</Popup>
	);
};

export default settingsPopup;
