import './App.css';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Prompts from './pages/Prompts';
import Edit from './pages/Edit';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { purple } from '@mui/material/colors';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import { Outlet } from 'react-router';

import { useState, useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[100]
    },
    background: {
      paper: purple[50],
    }
  }
});

const callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
};

function App() {

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (window.location.pathname === '/') {
      setShow(false)
    }
    else {
      setShow(true)
    }
    console.log(show)
  }, [show])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/Prompts" element={
              <>
                <Prompts />
                <SimpleBottomNavigation />
              </>
             } 
             />
            <Route path="/Edit" element={
              <>
                <Edit />
                <SimpleBottomNavigation />
              </>
             }
            />
            <Route path="/Explore" element={
              <>
                <Explore />
                <SimpleBottomNavigation />
              </>
            } />
            <Route path="/Profile" element={
              <>
              <Profile />
              <SimpleBottomNavigation />
              </>
            } />
            <Route path="/Messages" element={
              <>
              <Messages />
              <SimpleBottomNavigation />
              </>
            } />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
