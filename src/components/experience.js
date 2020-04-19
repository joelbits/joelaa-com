import React from 'react'
import PropTypes from 'prop-types'
import { FaHistory } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/experience.module.sass'

function Experience({ data, css }) {
  const myExperience = data
  return (
    <div id="experience" className={css.appExperience}>
      <div className={css.headerWrapper}>
        <h2>{'Experience'}</h2>
        <FaHistory className={css.experienceIcon}/>
      </div>
      {myExperience && myExperience.map(alldata => (
        <div key={alldata.position} className={css.work}>
          {(alldata.startDate || alldata.endDate) &&
          <div className={css.dates}><span>{alldata.startDate}</span><span>{alldata.endDate}</span></div>}
          {alldata.position && <span className={css.position}>{alldata.position}</span>}
          {alldata.company && alldata.website
          && <span className={css.company}><a href={alldata.website}>{alldata.company}</a></span>}
          {alldata.summary && <span className={css.summary}>{alldata.summary}</span>}
          {alldata.highlights && alldata.highlights[0] !== '' && alldata.highlights.map(highlight => (
            <span className={css.highlight} key={Math.random()}>
              - {highlight}
            </span>))
          }
        </div>
      ))
      })}
    </div>
  )
}

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default styleable(styles)(Experience)
