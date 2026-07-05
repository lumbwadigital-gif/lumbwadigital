import { FiFilter, FiTrash2 } from 'react-icons/fi'
import styles from './TodoFilters.module.css'

function TodoFilters({ filter, onFilterChange, onClearCompleted, onDeleteAll, totalTodos, completedCount }) {
  return (
    <div className={styles.filters}>
      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => onFilterChange('all')}
        >
          <FiFilter size={16} /> All ({totalTodos})
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'active' ? styles.active : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active ({totalTodos - completedCount})
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'completed' ? styles.active : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completed ({completedCount})
        </button>
      </div>

      <div className={styles.actions}>
        {completedCount > 0 && (
          <button
            className={styles.clearBtn}
            onClick={onClearCompleted}
            title="Clear completed tasks"
          >
            Clear Completed
          </button>
        )}
        {totalTodos > 0 && (
          <button
            className={styles.deleteAllBtn}
            onClick={onDeleteAll}
            title="Delete all tasks"
          >
            <FiTrash2 size={16} /> Delete All
          </button>
        )}
      </div>
    </div>
  )
}

export default TodoFilters
