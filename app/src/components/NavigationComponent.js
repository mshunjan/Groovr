import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const NavigationComponent = ({ navs }) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navs.map(nav => 
          <BottomNavigationAction label={nav.label} icon={nav.icon} onClick={nav.onclick} />
      )}
      </BottomNavigation>
    </Box>
  );
}

export default NavigationComponent;