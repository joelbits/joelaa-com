import React from 'react'
import PropTypes from 'prop-types'
import { FaBriefcase } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/portfolio.module.sass'


function Portfolio({ data, css }) {
  return (
    <div id="portfolio" className={css.appPortfolio}>
        <div className={css.headerWrapper}>
            <h2>{'Portfolio '}</h2>
            <FaBriefcase className={css.portfolioIcon} />
        </div>

        <div className={css.publicationList}>
            {data && data.map(alldata => (
                <div key={alldata.name + alldata.releaseDate} className={css.publication}>
                    {(alldata.image && alldata.website) && <a href={`//${alldata.website}`} title="See Project Site">
                        <img src={alldata.image} alt="Project Thumbnail" />
                    </a>}
                    {(alldata.startDate || alldata.endDate) && (
                        <div className={css.dates}>
                            <span>{alldata.startDate}</span>
                            <span>{alldata.endDate}</span>
                        </div>
                    )}
                    {alldata.publisher && <span className={css.publisher}>{alldata.publisher}</span>}
                    {alldata.name && <span className={css.name}>{alldata.name}</span>}
                    {alldata.releaseDate && <span className={css.releaseDate}>{alldata.releaseDate}</span>}
                    {alldata.website && <span className={css.website}><a href={`//${alldata.website}`}>{alldata.website}</a></span>}
                    {alldata.summary && <span className={css.summary}>{alldata.summary}</span>}
                </div>
            ))}
        </div>
    </div>
  );
}

Portfolio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default styleable(styles)(Portfolio);
