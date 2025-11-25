import React, { useState } from 'react'

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a task"
        onChange={e => setValue(e.target.value)}
        aria-label="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  )
}
