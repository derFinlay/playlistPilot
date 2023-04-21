import { Button } from '@mui/material';
import Navbar from '../navbar';
import InfoCard from './infoCard';


function Homepage() {
	return (
		<div>
			<Navbar navbarType="homepage"/>
			
			<div
				style={{
					height: "70vh",
					marginTop: "3rem",
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>

				<InfoCard>
					<h1></h1>
				</InfoCard>
				<InfoCard>
					<h1></h1>
				</InfoCard>
				<InfoCard>
					<h1></h1>
				</InfoCard>
			</div>
		</div>
	);
}

export default Homepage;
