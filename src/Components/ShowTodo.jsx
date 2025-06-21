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
    <div className="h-[70vh] overflow-y-auto bg-amber-50"> 
      {filteredTodos.map((item) => (
        <div key={item.id} className="border-b shadow border-gray-400">
          <div className="text-lg font-semibold">{item.title}</div>
          <div className="text-gray-700">{item.description}</div>

          <div className="flex gap-4 mt-2">
            {/* DELETE Button */}
            <button
              onClick={() => {
                const filterData = storeTodos.filter((i) => i.id !== item.id)
                setStoreTodos(filterData)
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              DEL
            </button>

            {/* EDIT Button */}
            <button
              onClick={() => {
                setEditTitle(item.title)
                setEditDiscription(item.description)
                setIsEditing(true)
                setEditId(item.id)
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShowTodo
