import SettingsIcon from '@mui/icons-material/Settings';
import SettingsTooltip from './dashboard/settingsTooltip';
import Icon from './icon';
import { Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardButton from './homepage/dashboardButton';
import { useState } from 'react';
import SettingsPopup from './dashboard/settingsPopup';

interface NavbarProps {
	navbarType: 'homepage' | 'dashboard';
}

function Navbar({ navbarType }: NavbarProps) {

	const [showSettingsPopup, setShowSettingsPopup] = useState(false)

	return (
		<div
			style={{
				boxShadow:
					'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
				borderRadius: '15px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: '100px',
				backgroundColor: '#38726c',
				margin: '10px',
				color: 'white',
				padding: '10px',
			}}
		>
			<Icon />
			{navbarType == 'dashboard' && (
				<>
					<SettingsTooltip handleClick={() => {setShowSettingsPopup((show) => !show)}}/>
					<SettingsPopup showPopup={showSettingsPopup} closePopup={() => {setShowSettingsPopup(false)}}/>
				</>
			)}
			{navbarType == 'homepage' && <DashboardButton />}

			{/* {navbarType == "dashboard" ? <SettingsTooltip /> : <DashboardButton />} */}
		</div>
	);
}
export default Navbar;
