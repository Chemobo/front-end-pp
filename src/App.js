import React from 'react';
import './App.css';
import Home from "./components/Home";
import Cars from "./components/Cars";
import About from './components/About';
import Hire from './components/Hire';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="text-3xl font-bold underline">
    <div className='body'>
    <div  className="JayTours">
          <h1>JAYTOURS</h1>
       <Router>
     <NavBar />
     <Routes>
     <Route exact path='/' element={<Home />} />
       <Route path='/aboutus' element={<About />} />
       <Route path='/hire' element={<Hire />} />
       <Route path='/cars' element={<Cars />} />
       </Routes>
     </Router>
     </div>
   </div>
   </div>
 );
}

export default App;
