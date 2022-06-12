import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface IAppProps {
}

const Dashboard = (props: IAppProps) => {
    return (
        <Box>
            <Typography variant='h5'>Dashboard</Typography>
        </Box>
    );
}

export default Dashboard;
