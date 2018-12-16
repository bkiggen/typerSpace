import React from 'react';
import PropTypes from 'prop-types';
import StatsImage from '../assets/images/Stats.png'

function Stats(props){
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1155px;
          height: 684px;
          background-image: url(${StatsImage})
        }
        `}</style>
    </div>
  );
}


export default Stats;
