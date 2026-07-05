import { FiTrash2, FiEdit2, FiCheckCircle, FiCircle } from 'react-icons/fi'
import styles from './TodoItem.module.css'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const isOverdue = () => {
    if (!todo.dueDate || todo.completed) return false
    return new Date(todo.dueDate) < new Date()
  }

  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <div className={styles.content}>
        <button
          className={styles.checkbox}
          onClick={() => onToggle(todo.id)}
          title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed ? (
            <FiCheckCircle size={24} className={styles.checked} />
          ) : (
            <FiCircle size={24} />
          )}
        </button>

        <div className={styles.textContainer}>
          <p className={styles.text}>{todo.text}</p>
          <div className={styles.meta}>
            {todo.dueDate && (
              <span className={`${styles.dueDate} ${isOverdue() ? styles.overdue : ''}`}>
                📅 {formatDate(todo.dueDate)}
              </span>
            )}
            <span className={`${styles.priority} ${styles[`priority-${todo.priority}`]}`}>
              {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.editBtn}
          onClick={() => onEdit(todo)}
          title="Edit task"
        >
          <FiEdit2 size={18} />
        </button>
        <button
          className={styles.deleteBtn}
          onClick={() => onDelete(todo.id)}
          title="Delete task"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
