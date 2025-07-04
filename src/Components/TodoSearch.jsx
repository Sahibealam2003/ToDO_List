import React from 'react'

const TodoSearch = ({ setSearchTodos }) => {
  return (
    <div
      className='h-[70px] w-full bg-gradient-to-br from-[#2c2c2c] via-[#585858] flex items-center justify-center
                 shadow-[0_5px_5px_rgba(0,0,0,1)]' // 👈 Bottom shadow only
    >
      <input
        type="text"
        onChange={(e) => setSearchTodos(e.target.value)}
        placeholder="Search Todo`s"
        className=' text-gray-800 w-[400px] h-[40px] text-[15px] 
                   focus:text-[17px] focus:text-amber-50 focus:bg-[#585858] placeholder-amber-50 focus:h-[50px] 
                   focus:outline-0 pl-3 border-1  border-amber-50 rounded'
      />
    </div>
  )
}

export default TodoSearch
