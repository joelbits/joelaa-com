import React from 'react';
import PropTypes from 'prop-types';
import { FaUniversity } from 'react-icons/fa';
import styleable from 'react-styleable';
import styles from '../styles/education.module.sass';


function Education({ data, css }) {
    const myEducation = data;
    return (
        <div id="appEducation" className={css.appEducation}>
            <h2>
                Education
                <FaUniversity className={css.educationIcon}/>
            </h2>

            {myEducation && myEducation.map(alldata => (
            <div key={alldata.startDate} className={css.education}>
                {(alldata.startDate || alldata.endDate) && (
                <div className={css.dates}>
                    <span>{alldata.startDate}</span>
                    <span>{alldata.endDate}</span>
                </div>
            )}
                {alldata.institution && <span className={css.institution}>{alldata.institution}</span>}
                {alldata.area && <span className={css.area}>{alldata.area}</span>}
                {alldata.studyType && <span className={css.studyType}>{alldata.studyType}</span>}
                {alldata.courses && (
                    <ul>
                        {alldata.courses.map((course) => <li className={css.course} key={course}>{course}</li>)}
                    </ul>
                )}
            </div>
        ))}
        </div>
    );
}

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default styleable(styles)(Education);

