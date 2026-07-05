import styles from './About.module.css'

function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm Abuufaudhan from Sandals Point, passionate about creating digital solutions that make a difference. 
              With a focus on innovation and user experience, I develop websites and applications that are not only 
              functional but also beautiful and intuitive.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, and it has evolved into a 
              professional commitment to excellence. I believe in continuous learning and staying updated with 
              the latest technologies and best practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the community.
            </p>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.stat}>
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
