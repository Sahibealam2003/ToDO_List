import React from 'react'

const TodoSearch = ({ setSearchTodos }) => {
  return (
    <div >
      <input
        type="text"
        onChange={(e) => setSearchTodos(e.target.value)}
      
        placeholder="Search by title"
      />
    </div>
  )
}

export default TodoSearch
