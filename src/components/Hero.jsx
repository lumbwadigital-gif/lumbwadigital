import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.content}>
          <h1>Hi, I'm <span>Abuufaudhan</span></h1>
          <p className={styles.subtitle}>Sandals Point - Building Digital Solutions</p>
          <p className={styles.description}>
            Welcome to my digital portfolio. I create innovative solutions and build amazing experiences.
          </p>
          
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} title="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="#" className={styles.socialLink} title="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="#" className={styles.socialLink} title="Email">
              <FiMail size={24} />
            </a>
          </div>

          <div className={styles.cta}>
            <button className="btn btn-primary">Get In Touch</button>
            <button className="btn btn-secondary">View My Work</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
