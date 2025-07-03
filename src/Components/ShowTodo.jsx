import React from 'react'
import { toDosValue } from '../../Utility/TodoContex'
import { useNavigate } from 'react-router-dom'

const ShowTodo = ({ searchTodos }) => {
  const navigate=useNavigate()
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
    <div className=' h-[68vh] w-[100%] flex flex-col items-center overflow-y-auto'>
      <div className=" w-[96%] mt-4 ">
        {filteredTodos.map((item) => (
          <div 
            key={item.id}
            className="border bg-amber-50 border-gray-400 transition-transform hover:scale-102 duration-200   shadow-[0px_5px_5px_rgba(000,000,000,0.5)] mb-2 p-1 flex justify-between items-start"
          >

            <div className='cursor-pointer w-[100%] flex flex-col gap-2 ml-2' onClick={()=>navigate(`/details/${item.id}`)}>
              <div >
                <span className='text-[17px] text-gray-500 '>Title : </span>
                <span className='font-bold text-[21px]'>{item.title}</span>
              </div>
              <div className="text-gray-700">
                <span className='text-[17px] text-gray-500'>Description : </span>
                <span className='text-[18px]'>{item.description}</span>
              </div>
            </div>


            <div className="flex flex-col gap-2 mr-2">
              <button
                onClick={() => {
                  const filterData = storeTodos.filter((i) => i.id !== item.id)
                  setStoreTodos(filterData)
                }}
                className="p-1 text-[15px] text-xl cursor-pointer"
              >
                <svg
                  className='transition-transform duration-200 hover:scale-110 rounded hover:bg-[#585858]'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="black"
                >
                  <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                </svg>

              </button>

              <button
                onClick={() => {
                  setEditTitle(item.title)
                  setEditDiscription(item.description)
                  setIsEditing(true)
                  setEditId(item.id)
                }}
                className="p-1 text-[15px] text-xl cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-6 h-6 hover:fill-amber-50 hover:bg-[#585858] transition-transform duration-200 hover:scale-110 rounded"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34c.38-.38.38-1.01 0-1.39l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>

              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowTodo
