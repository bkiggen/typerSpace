import React, { Component } from 'react';
import './App.css';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import Training from './Training';
import Battle from './Battle';
import Command from './Command';


class App extends Component {





  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=><Welcome />} />
          <Route exact path='/Command' render={()=><Command />} />
          <Route exact path='/Battle' render={()=><Battle />} />
          <Route exact path='/Training' render={()=><Training />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
