import { useState, useEffect } from 'react'

const TODO_STORAGE_KEY = 'abuufaudhan_todos'

export function useTodoStorage() {
  const [todos, setTodos] = useState([])
  const [loaded, setLoaded] = useState(false)

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem(TODO_STORAGE_KEY)
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error('Error loading todos:', error)
      }
    }
    setLoaded(true)
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
    }
  }, [todos, loaded])

  const addTodo = (text, priority = 'medium', dueDate = null) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      priority,
      dueDate,
      createdAt: new Date().toISOString()
    }
    setTodos([newTodo, ...todos])
    return newTodo
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const updateTodo = (id, updates) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const deleteAll = () => {
    setTodos([])
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    clearCompleted,
    deleteAll,
    loaded
  }
}
