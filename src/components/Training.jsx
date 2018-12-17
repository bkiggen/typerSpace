import React from 'react';
import PropTypes from 'prop-types';
import TrainingImage from './../assets/images/Training.png';

function Training(props){
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1155px;
          height: 684px;
          margin: 0 auto;
          padding-top: 50px;
          background-image: url(${TrainingImage});
          background-repeat: no-repeat;
        }
        `}</style>
    </div>
  );
};


export default Training;
