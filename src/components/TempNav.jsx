import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TempNav(props){
  return (
    <div>
    <style jsx> {`
      Link {
        color: red;
      }
      `}</style>
      <Link to="/"> Welcome </Link>
      <Link to="/Command"> Command </Link>
      <Link to="/Stats"> Stats </Link>
      <Link to="/Battle"> Battle </Link>
      <Link to="/Training"> Training </Link>
    </div>
  );
};


export default TempNav;
