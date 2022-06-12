import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface IAppProps {
}

const NoMatch = (props: IAppProps) => {
    return (
        <Box>
            <Typography variant='h5'>No Match</Typography>
        </Box>
    );
}

export default NoMatch;
