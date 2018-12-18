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

  render() {
    return (
      <div className="App">
        <TempNav/>
        <Switch>
          <Route exact path='/' render={()=><Welcome />} />
          <Route exact path='/Command' render={()=><Command />} />
          <Route exact path='/Battle' render={()=><Battle />} />
          <Route exact path='/Training' render={()=><Training
              currentRound={this.props.currentRound}
              isTraining={this.props.isTraining}
              levels={this.props.levels}
                />} />
          <Route exact path='/Stats' render={()=><Stats />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    currentRound: state.roundReducer.currentRound,
    isTraining: state.roundReducer.isTraining,
    levels: state.roundReducer.levels
  };
};


export default withRouter(connect(mapStateToProps)(App));
