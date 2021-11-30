import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './MyComponents/About';
import Services from './MyComponents/Services';
import Contact from './MyComponents/Contact';
import Footer from './MyComponents/Footer';
import Login from './MyComponents/Login';
import Register from './MyComponents/Register';
import Dashboard from './MyComponents/Dashboard';
import { render } from '@testing-library/react';



function App() {
 
  return (
    <>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="services/" component={Services}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/dashboard" component={Dashboard}/>
    <Footer/>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Home/>
        <Footer />
      </Router> */}
    </>

  );
}

export default App;
