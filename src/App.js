import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import {AboutUs} from './pages/AboutUs';
import PR from './pages/PR';
import {NoMatch} from './pages/NoMatch';
import {NavigationBar} from './components/NavigationBar';
import {Officers} from './pages/Officers'

class App extends Component {
  render(){
    return (
      <div>
        <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/officers" component={Officers}/>
            <Route path="/pr" component={PR}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
