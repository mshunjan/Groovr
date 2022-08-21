import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate(); 

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 99  }}>
      <BottomNavigation
        
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} onClick={() => navigate('/Explore')} />
        <BottomNavigationAction label="Messages" icon={<ForumIcon />} onClick={() => navigate('/Messages')}/>
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} onClick={() => navigate('/Profile')} />
      </BottomNavigation>
    </Box>
  );
}
