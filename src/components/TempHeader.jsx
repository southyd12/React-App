// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function TempHeader() {
//   return (
//     <div>
//     <NavLink to="/">List Page</NavLink>
//     <NavLink to="/add">Add Page</NavLink>
//     <NavLink to="/update">Update Page</NavLink>
//     <NavLink to="/gkjrgk">Not Found Page</NavLink>
//     </div>
//   )
// }

// export default TempHeader


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import ErrorBoundary from "./debug/ErrorBoundary";

function DrawerAppBar() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      
      <MobileNavigation handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <DesktopNavigation handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
          </Box>
    </Box>
  );
}

export default DrawerAppBar;