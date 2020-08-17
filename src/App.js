import React, {Component} from 'react';
import {Route} from 'react-router';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Home from './Home/Home';
import Services from './Services/Services';
import Testimony from './Testimony/Testimony';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Route
        exact path='/'
        component={Home} />
      <Route
        exact path='/contact'
        component={Contact} />
      <Route
        exact path='/gallery'
        component={Gallery} />
      <Route
        exact path='/services'
        component={Services} />
      
    </div>
  );
  }
}

export default App;
