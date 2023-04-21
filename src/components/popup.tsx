import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

interface PopupProps {
	children: React.ReactNode;
	showPopup: boolean;
	closePopup(): any;
}

const Popup = ({ children, showPopup, closePopup }: PopupProps) => {
	return showPopup ? (
		<div
			style={{
				position: 'absolute',
				top: '0',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				left: '0',
				width: '100vw',
				margin: '0px',
				padding: '0px',
				backdropFilter: 'blur(10px)',
				height: '100vh',
			}}
			onClick={(e) => {
				console.log('OUTSIDE');
				closePopup();
			}}>
			<div
				onClick={(e) => {
					console.log('INSIDE');
					e.stopPropagation();
				}}
				style={{
					position: 'relative',
					width: '60%',
					height: '80%',
					background: '#2e282a',
					boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
					borderRadius: '10px',
					padding: '4rem',
				}}>
				<IconButton
					onClick={(e) => {
						closePopup();
					}}
					sx={{
						position: 'absolute',
						right: '0.5rem',
						top: '0.5rem',
						cursor: 'pointer',
						color: 'white',
						transition: '0.15s ease-in-out',
						'&:hover': {
							transform: 'scale(1.1)',
							color: 'red',
						},
					}}>
					<CloseIcon fontSize='large' />
				</IconButton>
				{children}
			</div>
		</div>
	) : null;
};

export default Popup;
