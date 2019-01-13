import React from 'react'
import Img from 'gatsby-image'
import { FaBriefcase } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/portfolio.module.sass'


function Portfolio({ data, css }) {
    const { publications } = data.resumeData
    const { images } = data

    const getImageForPublication = (pubName, imgSrc) => {
        let res = false;
        images.forEach(element => {
            if (element.description.includes('Project:')
                && element.description.includes(pubName)) {
                    switch (imgSrc) {
                        case 'fixed': 
                            res = element.fixed
                            break
                        case 'fluid': 
                            res = element.fluid
                            break
                        case 'url':
                            res = element.file.url
                            break
                        default:
                            res = element
                            break;
                    }
                }
        })
        return res
    }

    return (
        <div id="portfolio" className={css.appPortfolio}>
            <div className={css.headerWrapper}>
                <h2>{'Portfolio '}</h2>
                <FaBriefcase className={css.portfolioIcon} />
            </div>

            <div className={css.publicationList}>
                {publications && publications.map(publication => (
                    <div key={publication.name + publication.releaseDate} className={css.publication}>
                        {(images && publication.website && getImageForPublication(publication.name, 'fixed') !== false) && (
                            <a href={getImageForPublication(publication.name, 'url')} title="See Project Screenshot">
                                <Img fixed={getImageForPublication(publication.name, "fixed")} alt="Project Thumbnail" />
                            </a>
                        )}
                        {(publication.startDate || publication.endDate) && (
                            <div className={css.dates}>
                                <span>{publication.startDate}</span>
                                <span>{publication.endDate}</span>
                            </div>
                        )}
                        {publication.publisher && <span className={css.publisher}>{publication.publisher}</span>}
                        {publication.name && <span className={css.name}>{publication.name}</span>}
                        {publication.releaseDate && <span className={css.releaseDate}>{publication.releaseDate}</span>}
                        {publication.website && <span className={css.website}><a href={`//${publication.website}`}>{publication.website}</a></span>}
                        {publication.summary && <span className={css.summary}>{publication.summary}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default styleable(styles)(Portfolio);
