import PropTypes from 'prop-types'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/header.module.sass'

const Header = ({ siteTitle, css }) => {
  const scrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  
  return (
    <React.Fragment>
      <header className={css.appHeader}>
        <div className={css.hero}>
          <section className={css.appTitles}>
            <p className={css.subTitle}>Swedish Computer Science Student, Web & Software</p>
            <p className={css.mainTitle}>
              {'DEVELOPER.'}
            </p>
            <button className={css.btnContactMe} title="Available for hire and projects!">CONTACT ME</button>
          </section>
        </div>
        <FaArrowDown className={css.downArrow} alt="Scroll down" onClick={scrollDown} title="Scroll to bottom"/>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default styleable(styles)(Header)
