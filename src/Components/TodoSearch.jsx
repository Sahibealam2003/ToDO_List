import React from 'react'

const TodoSearch = ({ setSearchTodos }) => {
  return (
    <div>
      <input 
        type='text' 
        onChange={(e) => setSearchTodos(e.target.value)} 
        className='border-4 border-red-400' 
        placeholder='Search by title'
      />
    </div>
  )
}

export default TodoSearch
