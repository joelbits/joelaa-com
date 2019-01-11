import React from 'react'

import Icon from './icon'
import styleable from 'react-styleable'
import styles from '../styles/skills.module.sass'


function Skills({ data, css }) {
    const skillsData = data;
    return (
        <div id="skills" className={css.appSkills}>
            <h2>
                Skills
            </h2>

            <div className={css.skillsList}>
                {skillsData && skillsData.map((alldata) => {
                    const { logos } = alldata;
                    if (logos.length === 0) return null;
                    return alldata.keywords.map(keyword => (
                        <div key={keyword} className={css.skill}>
                            <Icon name={logos[keyword]} />
                            <span>{keyword}</span>
                        </div>
                    ))
                    })}
            </div>
        </div>
    )
}

export default styleable(styles)(Skills)
