import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props){
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1000px;
          height: 800px;
          background-image: url('../assets/Welcome.png');
          margin: 0 auto;
        }
        `}</style>
    </div>
  );
}


export default Welcome;
