import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';

interface settingsTooltipProps {
	handleClick(event: React.MouseEvent<HTMLButtonElement>): any
}

const SettingsTooltip = ({handleClick}: settingsTooltipProps) => {
	return (
		<button
			style={{
				backgroundColor: 'transparent',
				border: 'none',
				outline: 'none',
			}}
			onClick={(e) => handleClick(e)}
		>
			<Tooltip title="Settings" arrow>
				<SettingsIcon
					fontSize="large"
					sx={{
						marginRight: '1rem',
						cursor: 'pointer',
						transform: 'scale(1.4)',
						transition: '0.45s ease-in-out',
						'&:hover': {
							transform: 'rotate(180deg) scale(1.6)',
						},
					}}
				/>
			</Tooltip>
		</button>
	);
};
export default SettingsTooltip;
