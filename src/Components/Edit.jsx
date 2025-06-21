import React from 'react'
import { toDosValue } from '../../Utility/TodoContex'

const Edit = () => {
  const {
    editDiscription, setEditDiscription,
    editTitle, setEditTitle,
    storeTodos, setStoreTodos,
    setIsEditing, editId, setEditId
  } = toDosValue()

  // Update Handler
  const handleUpdate = () => {
    const updatedTodos = storeTodos.map((todo) =>
      todo.id === editId ? { ...todo, title: editTitle, description: editDiscription } : todo
    )
    setStoreTodos(updatedTodos)
    resetEdit()
  }

  // Cancel Handler
  const handleCancel = () => {
    resetEdit()
  }

  // Common Reset Function
  const resetEdit = () => {
    setEditTitle('')
    setEditDiscription('')
    setEditId(null)
    setIsEditing(false)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        placeholder="Edit Title"
        className="border px-2 py-1 rounded w-[90%]"
      />
      <input
        type="text"
        value={editDiscription}
        onChange={(e) => setEditDiscription(e.target.value)}
        placeholder="Edit Description"
        className="border px-2 py-1 rounded w-[90%]"
      />
      <div className="flex gap-4 mt-2">
        <button
          onClick={handleUpdate}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Update
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Edit
