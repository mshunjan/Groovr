import './App.css';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Prompts from './pages/Prompts';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
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
    background: {
      paper: purple[50],
      default: purple[100]
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
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />

        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Prompts" element={<Prompts />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
