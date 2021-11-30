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



function App() {
  return (
        <>
        <Router>
         
      <Navbar/>
      
      <Switch>   
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/about">
        <About/>
        </Route>
        <Route exact path="/services">
         <Services/>
        </Route>
        <Route exact path="/contact">
        <Contact/>
        </Route>
        <Route exact path="/login">
        <Login/>
        </Route>
        <Route exact path="/register">
        <Register/>
        </Route>
        <Route exact path="/dashboard">
        <Dashboard/>
        </Route>
      </Switch>
      <Home/> 
      <Footer/>
      </Router>
        </>

  );
}

export default App;
