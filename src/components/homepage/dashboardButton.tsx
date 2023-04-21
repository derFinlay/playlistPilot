import DashboardIcon from '@mui/icons-material/Dashboard';
import { Button } from '@mui/material';

const DashboardButton = () => {
	return (
		<Button
			variant="contained"
			size="large"
			sx={{
				'@keyframes breath': {
                    "0%": {
                        transform: "scale(1.0)"
                    },
                    "50%": {
                        transform: "scale(1.08)"
                    },
                    "100%": {
                        transform: "scale(1.0)"
                    }
                },
                animation: "breath linear infinite 2.5s",
				mx: '1rem',
				backgroundColor: '#6e8894',
			}}
			startIcon={<DashboardIcon />}
		>
			Dashboard
		</Button>
	);
};

export default DashboardButton;
