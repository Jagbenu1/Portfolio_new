import React, { Component }  from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
          <Routes>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/' element={<Home/>} /> 
          </Routes> 
      </div>
    );
  };
}


export default App;
