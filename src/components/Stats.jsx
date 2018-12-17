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
          margin: 0 auto;
          padding-top: 50px;
          background-image: url(${StatsImage});
          background-repeat: no-repeat;
        }
        `}</style>
    </div>
  );
}


export default Stats;
