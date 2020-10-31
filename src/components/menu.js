import React from 'react'
import { Link } from 'gatsby'
import styleable from 'react-styleable'
import styles from '../styles/menu.module.sass'
import classNames from 'classnames/bind'
import Burger from './burger'

let timer

class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width:     1980,
      height:    1024,
      wait:      false,
      scrollPos: 0,
      isVisible: false,
    }
    this.isMobile = this.isMobile.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  isMobile() {
    return (this.state.width < 800)
  }

  shouldDock() {
    return (this.state.scrollPos > 50)
  }

  toggleClass(el, className) {
    const menuElement = document.querySelector(el)
    menuElement.classList.toggle(className)
    this.forceUpdate()
  }

  toggleMenu() {
    if (!this.isMobile()) return
    this.setState(prevState => ({ isVisible: !prevState.isVisible }))
  }

  updateWindowDimensions() {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      this.setState({
                      width:     window.innerWidth,
                      height:    window.innerHeight,
                      scrollPos: window.scrollY,
                      wait:      false,
                    })
    }, 50)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('scroll', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.removeEventListener('scroll', this.updateWindowDimensions)
  }

  render() {
    const { css, siteSections, siteTitle } = this.props
    const { isVisible } = this.state
    let cx = classNames.bind(css)
    let className = cx({
                         navBarMobile: this.isMobile(),
                         navBar:       !this.isMobile(),
                         docked:       this.shouldDock(),
                       })
    return (
      <nav className={className}>
        <div className={css.navBarLogoWrap}>
          {this.isMobile() && 
            <Burger open={isVisible} onClick={this.toggleMenu} onKeyDown={this.toggleMenu}/>    
          }
          <Link to="/">
            {this.props.children}
            <h1>{siteTitle}</h1>
          </Link>
        </div>
        <ul className={`${isVisible ? css.menuList : css.hidden}`} id="menuList">
          {siteSections.edges.map(edge => {
            const node = edge.node
            if (node.name === 'Blog') return (
              <li key={node.name}>
                <Link to={`/${node.name.toLowerCase()}`} activeClassName={css.activeLink}>
                  {node.name}
                </Link>
              </li>
            )
            return (
              <li key={node.name}>
                <Link to={`/#${node.name.toLowerCase()}`} activeClassName={css.activeLink}>
                  {node.name}
                </Link>
              </li>
            )
          })
          }
          <li>
            <a href="//github.com/joelbits" target="_blank" rel="noopener noreferrer"
               aria-label="View Github profile">
              <p>
                Github
              </p>
            </a>
          </li>
        </ul>
      </nav>
    )
  }

}

export default styleable(styles)(Menu)
