import './App.css';

import Home from './pages/Home';
import SignUp from './pages/SignUp';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
