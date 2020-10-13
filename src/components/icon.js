import React from 'react'
import PropTypes from 'prop-types'
import {
  FaAndroid, FaAws, FaCss3, FaDocker, FaHtml5, FaJava, FaJenkins, FaJsSquare, FaLinux, FaNodeJs, FaPython,
  FaReact,
} from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/skills.module.sass'

function Icon({ name, data, css }) {
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
    case 'Kafka':
      res = (<span />);
      data && data.edges && data.edges.forEach(edge => {
        if (edge.node.file.fileName && edge.node.file.fileName.indexOf('kafka') !== -1) {
          if (edge.node.file.url) res = (<img src={edge.node.file.url} alt="Apache Kafka logo" className={css.changeColor} />);
        }
      })
      break;
    case 'Spring':
      res = (<span />);
      data && data.edges && data.edges.forEach(edge => {
        if (edge.node.file.fileName && edge.node.file.fileName.indexOf('spring_logo_blue') !== -1) {
          if (edge.node.file.url) res = (<img src={edge.node.file.url} alt="Spring Framework logo" className={css.skillsImg} />);
        }
      })
      break;
    case 'ElasticSearch':
      res = (<span />);
      data && data.edges && data.edges.forEach(edge => {
        if (edge.node.file.fileName && edge.node.file.fileName.indexOf('elastic_logo') !== -1) {
          if (edge.node.file.url) res = (<img src={edge.node.file.url} alt="ElsaticSearch logo" className={css.skillsImg} />);
        }
      })
      break;
    default:
      res = (<div> X </div>);
      break;
  }
  return res;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object
};

export default styleable(styles)(Icon)
