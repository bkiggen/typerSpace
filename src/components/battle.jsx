import React from 'react';
import PropTypes from 'prop-types';

function Battle(props){
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1000px;
          height: 800px;
          background-image: url('../assets/Battle.png')
        }
        `}</style>
      <h1>Battle works</h1>
    </div>
  );
}


export default Battle;
