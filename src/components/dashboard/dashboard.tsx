import Navbar from '../navbar';
import { useState } from 'react'

const Dashboard = () => {
    
	const [showSettingsPopup, setShowSettingsPopup] = useState(false);

	return <Navbar navbarType="dashboard" />;
};

export default Dashboard;
