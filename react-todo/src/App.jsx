import React, { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const stored = localStorage.getItem('react-todo-list');
      return stored ? JSON.parse(stored) : [];
    } catch(e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('react-todo-list', JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    if (!text || !text.trim()) return;
    setTodos(prev => [{ id: Date.now(), text: text.trim(), completed: false }, ...prev]);
  }

  function toggleComplete(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  function removeTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="app-root">
      <header className="app-header">React To-Do List</header>
      <div className="app-container">
        <div className="panel">
          <h2>Tasks to Do</h2>
          <TodoInput onAdd={addTodo} />
        </div>

        <div className="panel">
          <h2>Completed Tasks</h2>
          <TodoList todos={todos} onToggle={toggleComplete} onRemove={removeTodo} />
        </div>
      </div>
    </div>
  )
}

export default App
