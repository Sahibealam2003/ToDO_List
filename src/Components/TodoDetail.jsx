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


    <h1 className='flex justify-center mt-10 font-bold text-4xl'><span className='text-[#1da1f2] px-2'>{todo.title.toUpperCase()}</span> TODO </h1>
    <div className='relative border border-gray-400 w-[80%]  mt-5 mx-auto  rounded'>
      <div className="absolute inset-0 shadow-[inset_1px_-1px_100px_rgba(0,0,0,0.1)]" />


      {isDetailEditing && <Edit detail={true} />}
      <div className='p-4 '>
        {todo && (
          <div>
            <h2 className=' text-xl font-bold'><span className='font-extrabold'>Title : </span> {todo.title}</h2>
            <p className='text-gray-600 mt-2'><span className='font-medium'>Description : </span>{todo.description}</p>
          </div>
        )}
      </div>
      {!isDetailEditing && (
  <div className='p-4 flex justify-center gap-4'>
    <button
      onClick={handleEditClick}
      className="transition-transform duration-200 hover:scale-104 cursor-pointer w-[30%] py-1.5 mt-4 bg-[#1da1f2] text-white drop-shadow-[0px_0px_3px_rgba(0,0,0,.6)] active:bg-[#00CCFF] active:scale-108 "
    >
      Edit
    </button>
    <button
      onClick={handleBack}
      className="transition-transform duration-200 hover:scale-104 cursor-pointer w-[30%] py-1.5 mt-4 bg-[#555] text-white drop-shadow-[0px_0px_3px_rgba(0,0,0,.6)] active:bg-[#888] active:scale-108 "
    >
      Back
    </button>
  </div>
)}




    
    </div>
        </>
  );
};

export default TodoDetail;
