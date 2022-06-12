import * as React from 'react'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Logo from '../components/logo/Logo'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import SvgIcon from '@mui/material/SvgIcon'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'

import { ColorConstants } from '../shared/themes/WoodsideTheme'
import AppRoutes from '../shared/constants/AppRoutes'

export interface IAppProps {}

const renderNavLink = (title: string, route: string, icon: any) => {
    return (
        <Tooltip title={title}>
            <IconButton
                aria-label={title}
                aria-haspopup="true"
                color="inherit"
                size="medium"
                sx={{
                    cursor: 'pointer',
                    width: 60,
                    height: 60,
                    '&:hover': {
                        backgroundColor: `${ColorConstants.TINT1_COLOR} !important`,
                    },
                }}
                href={`/${route}`}
            >
                <SvgIcon
                    viewBox="0 0 24 24"
                    style={{
                        width: 24,
                        height: 24,
                    }}
                >
                    {icon}
                </SvgIcon>
            </IconButton>
        </Tooltip>
    )
}

const Layout = (props: IAppProps) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                        }}
                    >
                        <Logo />

                        <Typography
                            variant="h6"
                            sx={{
                                ml: 1,
                                alignSelf: 'center',
                            }}
                        >
                            App Name
                        </Typography>
                    </Box>

                    <div style={{ flexGrow: 1 }} />

                    <Box sx={{ display: 'flex' }}>
                        <Divider orientation="vertical" flexItem />
                        {renderNavLink(
                            'Home',
                            AppRoutes.Home,
                            <HomeOutlinedIcon />
                        )}

                        <Divider orientation="vertical" flexItem />
                        {renderNavLink(
                            'Dashboard',
                            AppRoutes.Dashboard,
                            <DashboardRoundedIcon />
                        )}

                        <Divider orientation="vertical" flexItem />
                        {renderNavLink(
                            'About',
                            AppRoutes.About,
                            <InfoRoundedIcon />
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ p: 1 }}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
