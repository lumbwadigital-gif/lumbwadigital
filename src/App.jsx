import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TodoApp from './apps/todo/TodoApp'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [showTodoApp, setShowTodoApp] = useState(false)

  if (showTodoApp) {
    return <TodoApp />
  }

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero onShowTodoApp={() => setShowTodoApp(true)} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
