
import './App.css';


import Home from './pages/Home';
import Register from './pages/Register';
import Activate from './pages/Activate';
import Dashboard from './pages/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      
            <Route exact path="/" component= {Home} />
            <Route path = "/Register" component = {Register} />
            <Route path = "/Activate" component = {Activate} />
            <Route path = "/Dashboard" component = {Dashboard} />

            </div>
        </Router>
    
  );
}

export default App;
