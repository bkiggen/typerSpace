import React, { Component } from 'react';
import './App.css';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from './Welcome';

class App extends Component {















  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=><Welcome />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
