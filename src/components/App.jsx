import React, { Component } from 'react';
import './../assets/App.css';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import Training from './Training';
import Battle from './Battle';
import Command from './Command';
import Stats from './Stats';
import TempNav from './TempNav';


class App extends Component {
  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <div className="App">
        <TempNav/>
        <Switch>
          <Route exact path='/' render={()=><Welcome />} />
          <Route exact path='/Command' render={()=><Command />} />
          <Route exact path='/Battle' render={()=><Battle />} />
          <Route exact path='/Training' render={()=><Training />} />
          <Route exact path='/Stats' render={()=><Stats />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
