import React from 'react'

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={`todo-item ${todo.completed ? 'done' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="text">{todo.text}</span>
      </label>
      <button className="delete" onClick={() => onRemove(todo.id)} aria-label={`Delete ${todo.text}`}>
        &times;
      </button>
    </li>
  )
}
