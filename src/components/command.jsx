import React from 'react';
import PropTypes from 'prop-types';

function Command(props){
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1000px;
          height: 800px;
          background-image: url('../assets/Command.png')
        }
        `}</style>
      <h1>Command works</h1>
    </div>
  );
}


export default Command;
