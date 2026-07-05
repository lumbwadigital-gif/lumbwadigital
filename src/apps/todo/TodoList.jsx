import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

function TodoList({ todos, onToggle, onDelete, onEdit, filter }) {
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  const filteredTodos = getFilteredTodos()

  if (filteredTodos.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>📝</div>
        <p>{filter === 'active' ? 'No active tasks' : filter === 'completed' ? 'No completed tasks' : 'No tasks yet. Add one to get started!'}</p>
      </div>
    )
  }

  return (
    <div className={styles.todoList}>
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default TodoList
