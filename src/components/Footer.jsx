import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Abuufaudhan</h3>
            <p>Building digital solutions from Sandals Point</p>
          </div>
          
          <div className={styles.section}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>Follow Me</h3>
            <div className={styles.socials}>
              <a href="#" title="GitHub"><FiGithub size={20} /></a>
              <a href="#" title="LinkedIn"><FiLinkedin size={20} /></a>
              <a href="#" title="Twitter"><FiTwitter size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {currentYear} Abuufaudhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
