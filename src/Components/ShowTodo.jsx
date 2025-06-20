import React, { useState } from 'react'
import { toDosValue } from '../../Utility/TodoContex'

const ShowTodo = ({ searchTodos }) => {
  const [edit, setEdit] = useState(null)
  const {
    setIsEditing, storeTodos, setStoreTodos,
    setEditDiscription, setEditTitle,
    editDiscription, editTitle
  } = toDosValue()

  const filteredTodos = storeTodos.filter(item =>
    item.title.toLowerCase().includes(searchTodos.toLowerCase())
  )

  return (
    <div className="space-y-4">
      {filteredTodos.map((item) => (
        <div key={item.id} className="p-4 border rounded shadow-sm space-y-2 bg-gray-50">
          <div className="text-lg font-semibold text-gray-800">{item.title}</div>
          <div className="text-gray-600">{item.description}</div>

          <div className="flex space-x-2">
            <button
              onClick={() => {
                const filterData = storeTodos.filter((i) => i.id !== item.id)
                setStoreTodos(filterData)
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              DEL
            </button>

            <button
              onClick={() => {
                setEdit(item.id)
                setEditTitle(item.title)
                setEditDiscription(item.description)
                setIsEditing(true)
              }}
              className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
            >
              Edit
            </button>

            <button
              onClick={() => {
                const updateData = storeTodos.map((upitem) => {
                  if (upitem.id === edit) {
                    return { ...upitem, title: editTitle, description: editDiscription }
                  }
                  return upitem
                })
                setStoreTodos(updateData)
                setEditTitle('')
                setEditDiscription('')
                setIsEditing(false)
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShowTodo
