import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import styles from './TodoForm.module.css'

function TodoForm({ onAdd, editingTodo, onUpdate, onCancelEdit }) {
  const [text, setText] = useState(editingTodo?.text || '')
  const [priority, setPriority] = useState(editingTodo?.priority || 'medium')
  const [dueDate, setDueDate] = useState(editingTodo?.dueDate || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return

    if (editingTodo) {
      onUpdate(editingTodo.id, { text, priority, dueDate })
      onCancelEdit()
    } else {
      onAdd(text, priority, dueDate)
    }

    setText('')
    setPriority('medium')
    setDueDate('')
  }

  const handleCancel = () => {
    setText('')
    setPriority('medium')
    setDueDate('')
    onCancelEdit()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
          autoFocus
        />
      </div>

      <div className={styles.options}>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={styles.select}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className={styles.dateInput}
        />
      </div>

      <div className={styles.buttons}>
        {editingTodo ? (
          <>
            <button type="submit" className={`${styles.btn} ${styles.saveBtn}`}>
              Save Changes
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.cancelBtn}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <button type="submit" className={`${styles.btn} ${styles.addBtn}`}>
            <FiPlus size={20} /> Add Task
          </button>
        )}
      </div>
    </form>
  )
}

export default TodoForm
