import React from 'react'
import { Link } from 'gatsby'
import { FaGithub, FaBars } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/menu.module.sass'

class Menu extends React.Component {

  constructor() {
    super()
    this.state = {
      width: 1980,
      height: 1024,
    }
    this.isMobile = this.isMobile.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  isMobile() {
    const res = (this.state.width < 650) ? true : false;
    return res
  }

  toggleClass(el, className) {
    console.log(`Toggling classname: ${className} for el: ${el}`);
    const menuElement = document.querySelector(el)
    menuElement.classList.toggle(className)
  }

  toggleMenu() {
    const menuElement = document.querySelector('#menuList')
    if (menuElement.style.display !== 'none')
      menuElement.style.display = 'none';
    else
      menuElement.style.display = 'block';
  }

  updateWindowDimensions() {
    new Promise(() => setTimeout(() => {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
    }, 500))
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  render() {
    const { css, siteSections, siteTitle } = this.props;
    return (
      <nav className={this.isMobile() ? css.navBarMobile : css.navBar}>
        <div className={css.navBarLogoWrap}>
          <FaBars id="#menuBars" onClick={this.toggleMenu} />
          <Link to="/">
            <h1>{siteTitle}</h1>
          </Link>
        </div>
        <ul className={css.menuList} id="menuList">
          {siteSections.edges.map(edge => {
              const node = edge.node;
            if (node.name === 'Skills') {
              return (
                <li key={node.name}>
                  <Link to="#appSkills">
                      {node.name}
                  </Link>
                </li>
              );
            }
            if (node.name === 'Experience') {
              return (
                <li key={node.name}>
                  <Link to="#appExperience">
                    {node.name}
                  </Link>
                </li>
              );
            }
            if (node.name === 'Education') {
              return (
                <li key={node.name}>
                  <Link to="#appEducation">
                    {node.name}
                  </Link>
                </li>
              );
            }
            if (node.name === 'Portfolio') {
              return (
                <li key={node}>
                  <Link to="#appPortfolio">
                    {node.name}
                  </Link>
                </li>
              );
            }
            return <li key={node.name}><Link to={node.name}>{node.name}</Link></li>;
          })
          }
          <li>
            <a href="//github.com/joelbits" className={css.githubLink} target="_blank" rel="noopener noreferrer" title="View Github profile"><FaGithub className={css.githubLogo} /></a>
          </li>
        </ul>
      </nav>
    );
  }

  
}

export default styleable(styles)(Menu);
