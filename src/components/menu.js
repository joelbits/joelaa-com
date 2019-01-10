import React from 'react'
import { Link } from 'gatsby'
import { FaGithub } from 'react-icons/fa'
import styleable from 'react-styleable'
import styles from '../styles/menu.module.sass'

function Menu({ siteSections, siteTitle, css }) {
  return (
    <nav className={css.navBar}>
      <Link to="/"><h1 className={css.appLogo}>{siteTitle}</h1></Link>
      <ul>
        {siteSections.edges.map(edge => {
            const node = edge.node;
          if (node.name === 'Skills') {
            return (
              <li key={node.name}>
                <Link to="#appSkills">
                    {node.name}
                </Link>
              </li>
            );
          }
          if (node.name === 'Experience') {
            return (
              <li key={node.name}>
                <Link to="#appExperience">
                  {node.name}
                </Link>
              </li>
            );
          }
          if (node.name === 'Education') {
            return (
              <li key={node.name}>
                <Link to="#appEducation">
                  {node.name}
                </Link>
              </li>
            );
          }
          if (node.name === 'Portfolio') {
            return (
              <li key={node}>
                <Link to="#appPortfolio">
                  {node.name}
                </Link>
              </li>
            );
          }
          return <li key={node.name}><Link to={node.name}>{node.name}</Link></li>;
        })
        }
        <a href="//github.com/joelbits" target="_blank" rel="noopener noreferrer" title="View Github profile"><FaGithub className={css.githubLogo} /></a>
      </ul>
    </nav>
  );
}

export default styleable(styles)(Menu);
