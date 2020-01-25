import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import {AboutUs} from './AboutUs';
import PR from './PR';
import {NoMatch} from './NoMatch';
import {NavigationBar} from './components/NavigationBar';

class App extends Component {
  render(){
    return (
      <div>
        <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/pr" component={PR}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
