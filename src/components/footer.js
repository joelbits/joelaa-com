import React from 'react'
import { FaGithub } from 'react-icons/fa'
import styles from '../styles/footer.module.sass'

const Footer = ({ data }) => {
  const { name, email, github } = data
  return (
    <div className={styles.footer}>
        <a href={`mailto:${email}`}>
            {email}
        </a>
        <a href={`//github.com/${github}`} className={styles.githubLink} target="_blank" rel="noopener noreferrer" title="View Github profile"><FaGithub className={styles.githubLogo} /></a>
        <p>
          © {new Date().getFullYear()} {name} @ {(typeof window !== 'undefined') && new URL(window.location.href).hostname}
        </p>
    </div>
  )
}

export default Footer
