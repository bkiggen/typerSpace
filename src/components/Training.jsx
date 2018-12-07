import React from 'react';
import PropTypes from 'prop-types';

function Training(props){
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1000px;
          height: 800px;
          background-image: url('../assets/Training.png')
        }
        `}</style>
      <h1>Training works</h1>
    </div>
  );
}


export default Training;
