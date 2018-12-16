import React from 'react';
import PropTypes from 'prop-types';
import WelcomeImage from '../assets/images/Welcome.png'

function Welcome(props){
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1155px;
          height: 684px;
          background-image: url(${WelcomeImage});
          margin: 0 auto;
        }
        `}</style>
    </div>
  );
}


export default Welcome;
