import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import WoodsideTheme from './shared/themes/WoodsideTheme'
import Home from './views/home/Home'
import About from './views/about/About'
import Dashboard from './views/dashboard/Dashboard'
import AppRoutes from './shared/constants/AppRoutes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <ThemeProvider theme={WoodsideTheme}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path={AppRoutes.Home} element={<Home />} />
                    <Route path={AppRoutes.About} element={<About />} />
                    <Route path={AppRoutes.Dashboard} element={<Dashboard />} />
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
)

reportWebVitals()
