import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface IAppProps {}

const About = (props: IAppProps) => {
    return (
        <Box>
            <Typography variant="h5">About</Typography>
        </Box>
    )
}

export default About
