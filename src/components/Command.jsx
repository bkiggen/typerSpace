import React from 'react';
import PropTypes from 'prop-types';
import CommandImage from '../assets/images/Command.png'

function Command(props){
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1155px;
          height: 684px;
          background-image: url(${CommandImage})
        }
        `}</style>
    </div>
  );
}


export default Command;
