import React from 'react'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Route,Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Login from './components/Login';
import './App.css';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';

const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
      <Route exact path = "/">
        <Home />
      </Route>

      <Route path= "/about">
        <About />
      </Route>
      
      <Route path = "/Contact">
        <Contact />
      </Route>
      
      <Route path= "/Signup">
        <Signup />
      </Route>
      
      <Route path = "/Login">
        <Login />
      </Route>

      <Route path = "/logout">
        <Logout />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
      </Switch> 
    </div>
  )
}

export default App