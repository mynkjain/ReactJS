import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'
import Home from './component/home'; 
import About from './component/about'; 
import Contact from './component/contact';
function App() {
  return (
    <Router>
      <div className="App">
      <ul> 
        <li> 
          <Link to="/">Home</Link> 
        </li> 
        <li> 
          <Link to="/about">About Us</Link> 
        </li> 
        <li> 
          <Link to="/contact">Contact Us</Link> 
        </li> 
      </ul>  
      </div>
      <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/about' component={About}></Route> 
        <Route exact path='/contact' component={Contact}></Route> 
      </Switch>
    </Router>  
  );
}

export default App;
