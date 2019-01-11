import React from 'react'
import { Link } from 'gatsby'
import { FaGithub, FaBars } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/menu.module.sass'
import classNames from 'classnames/bind'

let timer;

class Menu extends React.Component {

  constructor() {
    super()
    this.state = {
      width: 1980,
      height: 1024,
      wait: false,
      scrollPos: 0,
    }
    this.isMobile = this.isMobile.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  isMobile() {
    const res = (this.state.width < 650) ? true : false;
    return res
  }

  shouldDock() {
    const res = (this.state.scrollPos > 50);
    if (res) {
      console.log(`Menu should DOCK! (scrolled >50 px)`)
    }
    return res;
  }

  toggleClass(el, className) {
    console.log(`Toggling classname: ${className} for el: ${el}`);
    const menuElement = document.querySelector(el)
    menuElement.classList.toggle(className)
    this.forceUpdate();
  }

  toggleMenu() {
    const menuElement = document.querySelector('#menuList')
    console.log(menuElement.style.display)
    if (menuElement.style.display === 'none')
      menuElement.style.display = 'block';
    else
      menuElement.style.display = 'none';
  }

  updateWindowDimensions() {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      this.setState({ 
        width: window.innerWidth,
        height: window.innerHeight,
        scrollPos: window.scrollY,
        wait: false,
      })
    }, 50)
  }

  componentDidMount() {
    console.log(this.props.siteSections)
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('scroll', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.removeEventListener('scroll', this.updateWindowDimensions)
  }

  render() {
    const { css, siteSections, siteTitle } = this.props;
    let cx = classNames.bind(css);
    let className = cx({
      navBarMobile: this.isMobile(),
      navBar: !this.isMobile(),
      docked: this.shouldDock(),
    })
    return (
      <nav className={className}>
        <div className={css.navBarLogoWrap}>
          <FaBars id="#menuBars" onClick={this.toggleMenu} />
          <Link to="/">
            <h1>{siteTitle}</h1>
          </Link>
        </div>
        <ul className={css.menuList} id="menuList">
          {siteSections.edges.map(edge => {
            const node = edge.node;
            if (node.name === 'Blog') return <li key={node.name}><Link to={node.name.toLowerCase()}>{node.name}</Link></li>;
            return <li key={node.name}><Link to={`#${node.name.toLowerCase()}`}>{node.name}</Link></li>;
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
