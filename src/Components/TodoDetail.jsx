import React from 'react';
import { toDosValue } from '../../Utility/TodoContex';
import { useNavigate, useParams } from 'react-router-dom';
import Edit from './Edit';

const TodoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    storeTodos,
    setIsDetailEditing,
    isDetailEditing,
    setEditTitle,
    setEditDiscription,
    setEditId
  } = toDosValue();

  const todo = storeTodos.find(item => item.id === id);

  const handleEditClick = () => {
    if (todo) {
      setEditTitle(todo.title);
      setEditDiscription(todo.description);
      setEditId(todo.id);
      setIsDetailEditing(true);
    }
  };

  const handleBack = () => {
    setIsDetailEditing(false);
    navigate('/');
  };

  return (
    <>
      <div className='p-4'>
        {todo && (
          <div>
            <h2 className='text-xl font-bold'>{todo.title}</h2>
            <p className='text-gray-600 mt-2'>{todo.description}</p>
          </div>
        )}
      </div>
      <div className='p-4 flex gap-4'>
        <button onClick={handleEditClick} className="bg-blue-500 px-3 py-1 rounded text-white hover:bg-blue-600">
          Edit
        </button>
        <button onClick={handleBack} className="bg-gray-500 px-3 py-1 rounded text-white hover:bg-gray-600">
          Back
        </button>
      </div>
      {isDetailEditing && <Edit />}
    </>
  );
};

export default TodoDetail;
