import { ReactNode } from 'react';
import { Box } from '@mui/material';

type InfoCardProps = {
	children: ReactNode;
};

const InfoCard = ({ children }: InfoCardProps) => {
	return (
		<Box
			sx={{
				width: '30%',
				height: '100%',
				backgroundColor: "rgba(0, 0, 0, 0.61)",
                boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.8)",
                transition: "0.3s ease-in-out",
				borderRadius: '15px',
				padding: '10px',
                "&:hover": {
                    transform: "scale(1.03)"
                }
			}}
		>
			{children}
		</Box>
	);
};

export default InfoCard;
