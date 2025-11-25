import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onRemove }) {
  if (!todos || todos.length === 0) return <p className="empty">No tasks yet</p>

  const active = todos.filter(t => !t.completed)
  const completed = todos.filter(t => t.completed)

  return (
    <div className="todo-lists">
      <ul className="active-list">
        {active.map(t => (
          <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </ul>

      <hr />

      <ul className="completed-list">
        {completed.map(t => (
          <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </ul>
    </div>
  )
}
