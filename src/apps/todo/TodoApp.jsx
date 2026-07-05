import { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'
import { useTodoStorage } from './useTodoStorage'
import styles from './TodoApp.module.css'

function TodoApp() {
  const [isDark, setIsDark] = useState(false)
  const [filter, setFilter] = useState('all')
  const [editingTodo, setEditingTodo] = useState(null)
  const { todos, addTodo, deleteTodo, toggleTodo, updateTodo, clearCompleted, deleteAll, loaded } = useTodoStorage()

  if (!loaded) {
    return <div className={styles.loading}>Loading...</div>
  }

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className={`${styles.container} ${isDark ? styles.dark : styles.light}`}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>📋 My Tasks</h1>
          <button
            className={styles.themeToggle}
            onClick={() => setIsDark(!isDark)}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <TodoForm
            onAdd={addTodo}
            editingTodo={editingTodo}
            onUpdate={updateTodo}
            onCancelEdit={() => setEditingTodo(null)}
          />

          {todos.length > 0 && (
            <TodoFilters
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
              onDeleteAll={() => {
                if (window.confirm('Are you sure you want to delete all tasks?')) {
                  deleteAll()
                }
              }}
              totalTodos={todos.length}
              completedCount={completedCount}
            />
          )}

          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={(id) => {
              if (window.confirm('Delete this task?')) {
                deleteTodo(id)
              }
            }}
            onEdit={setEditingTodo}
            filter={filter}
          />
        </div>

        <aside className={styles.stats}>
          <div className={styles.statCard}>
            <h3>📊 Statistics</h3>
            <div className={styles.statItem}>
              <span>Total Tasks</span>
              <strong>{todos.length}</strong>
            </div>
            <div className={styles.statItem}>
              <span>Completed</span>
              <strong className={styles.completed}>{completedCount}</strong>
            </div>
            <div className={styles.statItem}>
              <span>Remaining</span>
              <strong className={styles.remaining}>{todos.length - completedCount}</strong>
            </div>
            {todos.length > 0 && (
              <div className={styles.progress}>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${(completedCount / todos.length) * 100}%` }}
                  />
                </div>
                <small>{Math.round((completedCount / todos.length) * 100)}% Complete</small>
              </div>
            )}
          </div>

          <div className={styles.statCard}>
            <h3>🎯 Quick Tips</h3>
            <ul className={styles.tips}>
              <li>✓ Click the circle to mark tasks done</li>
              <li>✓ Set priority levels for tasks</li>
              <li>✓ Add due dates to stay organized</li>
              <li>✓ All tasks save automatically</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default TodoApp
