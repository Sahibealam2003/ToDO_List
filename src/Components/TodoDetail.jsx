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
    setEditDescription,
    setEditId
  } = toDosValue();

  const todo = storeTodos.find(item => item.id === id);

  const handleEditClick = () => {
    if (todo) {
      setEditTitle(todo.title);
      setEditDescription(todo.description);
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
      <div className='bg-black'>
        {todo && (
          <div>
            <h2>{todo.title}</h2>
            <p >{todo.description}</p>
          </div>
        )}
      </div>
      <div>
        <button onClick={handleEditClick} >
          Edit
        </button>
        <button onClick={handleBack} >
          Back
        </button>
      </div>
      {isDetailEditing && <Edit />}
    </>
  );
};

export default TodoDetail;
