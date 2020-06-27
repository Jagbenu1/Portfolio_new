import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
          <Switch>
            <Route path='/contact' component={Contact}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/about' component={About}/>
            <Route path='/' exact component={Home} /> 
          </Switch> 
      </div>
    );
  };
}


export default App;
