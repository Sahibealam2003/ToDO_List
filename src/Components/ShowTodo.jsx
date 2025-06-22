import React from 'react'
import { toDosValue } from '../../Utility/TodoContex'

const ShowTodo = ({ searchTodos }) => {
  const {
    setIsEditing,
    storeTodos,
    setStoreTodos,
    setEditDiscription,
    setEditTitle,
    setEditId
  } = toDosValue()

  const filteredTodos = storeTodos.filter(item =>
    item.title.toLowerCase().includes(searchTodos.toLowerCase())
  )

  return (
    <div className='h-[60vh] w-[100%] flex flex-col items-center overflow-y-auto'>
      <div className="w-[96%] mt-4 ">
        {filteredTodos.map((item) => (
          <div
            key={item.id}
            className="border border-gray-400 cursor-pointer shadow-[0px_5px_5px_rgba(000,000,000,0.5)] mb-2 p-3 flex justify-between items-start"
          >
          
            <div>
              <div>
                <span className='text-[17px] text-gray-500'>Title : </span>
                <span className='font-bold text-[21px]'>{item.title}</span>
              </div>
              <div className="text-gray-700">
                <span className='text-[17px] text-gray-500'>Description : </span>
                {item.description}
              </div>
            </div>

            
            <div className="flex flex-col gap-6 ">
              <button
                onClick={() => {
                  const filterData = storeTodos.filter((i) => i.id !== item.id)
                  setStoreTodos(filterData)
                }}
                className="px-2 text-[15px] text-xl cursor-pointer active:text-[20px]"
              >
                ❌
              </button>

              <button
                onClick={() => {
                  setEditTitle(item.title)
                  setEditDiscription(item.description)
                  setIsEditing(true)
                  setEditId(item.id)
                }}
                className="px-2 text-[15px] text-xl cursor-pointer active:text-[20px]"
              >
                ✏
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowTodo
