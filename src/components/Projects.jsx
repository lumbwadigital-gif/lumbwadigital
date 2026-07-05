import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styles from './Projects.module.css'

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite.',
      tech: ['React', 'CSS', 'Vite'],
      live: '#',
      github: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB'],
      live: '#',
      github: '#'
    },
    {
      title: 'Task Manager App',
      description: 'A productivity app to manage daily tasks with persistent storage.',
      tech: ['React', 'LocalStorage', 'CSS'],
      live: '#',
      github: '#'
    }
  ]

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3>{project.title}</h3>
              </div>
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
              
              <div className={styles.links}>
                <a href={project.live} className={styles.link} title="Live Demo">
                  <FiExternalLink size={18} /> Live
                </a>
                <a href={project.github} className={styles.link} title="GitHub">
                  <FiGithub size={18} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
