import './App.css';

import Home from './pages/Home';
import SignUp from './pages/SignUp';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/signup" element={<SignUp />}/> 
      </Routes>
    </Router>
  );
}

export default App;
