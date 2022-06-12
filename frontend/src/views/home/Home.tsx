import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface IAppProps {
}

const Home = (props: IAppProps) => {
    return (
        <Box>
            <Typography variant='h5'>Home</Typography>
        </Box>
    );
}

export default Home;
