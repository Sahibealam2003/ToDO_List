import React from 'react'

const TodoSearch = ({ setSearchTodos }) => {
  return (
    <div className='h-[70px] w-[100%] flex items-center justify-center border-b shadow border-gray-400'>
      <input
        type="text"
        onChange={(e) => setSearchTodos(e.target.value)}
      className='w-[400px] h-[40px] text-[15px] focus:text-[17px] focus:h-[50px] focus:outline-0 pl-3 border-2 border-[#00CCFF] rounded'
        placeholder="Search by title"
      />

    </div>
  )
}

export default TodoSearch
