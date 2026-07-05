import styles from './Skills.module.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Vite', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'APIs', 'Databases', 'Authentication']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Problem Solving', 'UI/UX Design']
    }
  ]

  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className={styles.skillCard}>
              <h3>{cat.category}</h3>
              <div className={styles.skillsList}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
