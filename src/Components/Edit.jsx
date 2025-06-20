import React from 'react'
import { toDosValue } from '../../Utility/TodoContex'

const Edit = () => {
  const { setEditDiscription, setEditTitle, editDiscription, editTitle } = toDosValue()
  return (
    <div className="space-y-4">
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        placeholder="Edit Title"
        className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="text"
        value={editDiscription}
        onChange={(e) => setEditDiscription(e.target.value)}
        placeholder="Edit Description"
        className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  )
}

export default Edit
