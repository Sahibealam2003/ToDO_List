import React, { useState } from 'react'
import { toDosValue } from '../../Utility/TodoContex'
import { v4 as uuid } from 'uuid'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const { storeTodos, setStoreTodos } = toDosValue()

  function onSubmitHandler() {
    if (!title || !description) return
    setStoreTodos([...storeTodos, { title, description, id: uuid() }])
    setTitle('')
    setdescription('')
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
        className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        placeholder="Enter Description"
        className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={onSubmitHandler}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Submit
      </button>
    </div>
  )
}

export default AddTodo
