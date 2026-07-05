import { useState } from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // You can add form submission logic here
    alert('Thank you for reaching out! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Let's Connect!</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out using the form or contact me directly.
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> your.email@example.com</p>
              <p><strong>Location:</strong> Sandals Point</p>
              <p><strong>Phone:</strong> +1 (XXX) XXX-XXXX</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
