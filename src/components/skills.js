import React from 'react'

import Icon from './icon'
import { FaToolbox } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/skills.module.sass'


function Skills({ data, images, css }) {
    const skillsData = data;
    return (
        <div id="skills" className={css.appSkills}>
            <div className={css.headerWrapper}>
                <h2>{'Skills'}</h2>
                <FaToolbox className={css.skillsIcon} />
            </div>

            <div className={css.skillsList}>
                {skillsData && skillsData.map((allSkillsData) => {
                    const { logos } = allSkillsData;
                    if (logos.length === 0) return null;
                    return allSkillsData.keywords.map(keyword => (
                        <div key={keyword} className={css.skill}>
                            <Icon name={logos[keyword]} data={images} />
                            <span>{keyword}</span>
                        </div>
                    ))
                    })}
            </div>
        </div>
    )
}

export default styleable(styles)(Skills)
