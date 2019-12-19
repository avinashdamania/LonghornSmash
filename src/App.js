import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {AboutUs} from './AboutUs';
import {PR} from './PR';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/pr" component={PR}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
