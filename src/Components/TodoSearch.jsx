import React from 'react'

const TodoSearch = ({ setSearchTodos }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        onChange={(e) => setSearchTodos(e.target.value)}
        className="w-full p-3 border-2 border-red-400 rounded outline-none focus:ring-2 focus:ring-red-300"
        placeholder="Search by title"
      />
    </div>
  )
}

export default TodoSearch
