import PropTypes from 'prop-types'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/header.module.sass'

const Header = ({ siteTitle, data, css }) => {
  const scrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const getLastWord = (fromString) => {
    let n = fromString.split(' ');
    return n[n.length - 1];
  };

  const removeLastWord = (fromString) => {
    let i = fromString.lastIndexOf(' ');
    return fromString.substring(0, i);
  };
  
  return (
    <React.Fragment>
      <header className={css.appHeader}>
        <div className={css.hero}>
          <section className={css.appTitles}>
            {data && data.shortBio && <p className={css.subTitle}>{removeLastWord(data.shortBio.shortBio)}</p>}
            {data && data.shortBio && <p className={css.mainTitle}>{getLastWord(data.shortBio.shortBio)}</p>}
            <button className={css.btnContactMe} title="Available for hire and projects!" onClick={scrollDown}>CONTACT ME</button>
          </section>
        </div>
      </header>
      <FaArrowDown className={css.downArrow} alt="Scroll down" onClick={scrollDown} title="Scroll to bottom"/>
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
