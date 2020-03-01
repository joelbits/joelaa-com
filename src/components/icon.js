import React from 'react';
import PropTypes from 'prop-types';
import {
  FaAndroid, FaAws, FaCss3, FaDocker, FaHtml5, FaJava, FaJenkins, FaJsSquare, FaLinux, FaNodeJs, FaPython,
  FaReact,
} from 'react-icons/fa'

function Icon({ name }) {
  let res;
  switch (name) {
    case 'FaHtml5':
      res = (<FaHtml5 />);
      break;
    case 'FaCss3':
      res = (<FaCss3 />);
      break;
    case 'FaJsSquare':
      res = (<FaJsSquare />);
      break;
    case 'FaTsSquare':
      res = (<FaJsSquare />);
      break;
    case 'FaReact':
      res = (<FaReact />);
      break;
    case 'FaNodeJs':
      res = (<FaNodeJs />);
      break;
    case 'FaAndroid':
      res = (<FaAndroid />);
      break;
    case 'FaJava':
      res = (<FaJava />);
      break;
    case 'FaPython':
      res = (<FaPython />);
      break;
    case 'FaDocker':
      res = (<FaDocker />);
      break;
    case 'FaLinux':
      res = (<FaLinux />);
      break;
    case 'FaAws':
      res = (<FaAws />);
      break;
    case 'FaJenkins':
      res = (<FaJenkins />);
      break;
    default:
      res = (<div> X </div>);
      break;
  }
  return res;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
