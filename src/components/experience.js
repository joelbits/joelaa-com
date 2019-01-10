import React from 'react';
import PropTypes from 'prop-types';
import { FaHistory } from 'react-icons/fa';
import styleable from 'react-styleable';
import styles from '../styles/experience.module.sass';

function Experience({ data, css }) {
    const myExperience = data;
    return (
        <div id="appExperience" className={css.appExperience}>
            <h2>
                Experience
                <FaHistory className={css.experienceIcon} />
            </h2>
            {myExperience && myExperience.map(alldata => (
            <div key={alldata.position} className={css.work}>
                {(alldata.startDate || alldata.endDate) && <div className={css.dates}><span>{alldata.startDate}</span><span>{alldata.endDate}</span></div>}
                {alldata.position && <span className="position">{alldata.position}</span>}
                {alldata.company && alldata.website
                && <span className={css.company}><a href={alldata.website}>{alldata.company}</a></span>}
                {alldata.summary && <span className={css.summary}>{alldata.summary}</span>}
            </div>
            ))}
        </div>
    );
}

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default styleable(styles)(Experience);
