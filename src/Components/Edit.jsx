import React from 'react';
import { toDosValue } from '../../Utility/TodoContex';

const Edit = () => {
  const {
    editDiscription, setEditDiscription,
    editTitle, setEditTitle,
    storeTodos, setStoreTodos,
    setIsEditing, editId, setEditId,
    setIsDetailEditing
  } = toDosValue();

  const handleUpdate = () => {
    const updated = storeTodos.map((item) =>
      item.id === editId ? { ...item, title: editTitle, description: editDiscription } : item
    );
    setStoreTodos(updated);
    setEditTitle('');
    setEditDiscription('');
    setEditId(null);
    setIsEditing(false);
    setIsDetailEditing(false); // reset after detail editing
  };

  return (
    <div className='p-4'>
      <h2>Edit Todo</h2>
      <input
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        placeholder='Title'
        className='border p-1 mb-2 w-full'
      />
      <input
        value={editDiscription}
        onChange={(e) => setEditDiscription(e.target.value)}
        placeholder='Description'
        className='border p-1 mb-2 w-full'
      />
      <button onClick={handleUpdate} className='bg-green-500 text-white px-4 py-2 rounded'>Update</button>
    </div>
  );
};

export default Edit;
