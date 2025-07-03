import React, { useState } from "react";
import { toDosValue } from "../../Utility/TodoContex";

const Edit = ({detail}) => {
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const {
<<<<<<< HEAD
    editDescription, setEditDescription,
    editTitle, setEditTitle,
    storeTodos, setStoreTodos,
    setIsEditing, editId, setEditId,
    setIsDetailEditing
  } = toDosValue();

  const handleUpdate = () => {
 
    if (editTitle.trim() === '' || editDescription.trim() === '') {
      alert('Title or Description cannot both be empty!');
      return;
    }

    const updated = storeTodos.map((item) =>
      item.id === editId ? { ...item, title: editTitle, description: editDescription } : item
    );

    setStoreTodos(updated);
    setEditTitle('');
    setEditDescription('');
    setEditId(null);
    setIsEditing(false);
    setIsDetailEditing(false);
  };

  const handleCancel = () => {
    setEditTitle('');
    setEditDescription('');
    setEditId(null);
    setIsEditing(false);
    setIsDetailEditing(false);
  };

  return (
    <div className='border bg-black w-[100%] p-4 text-amber-50'>

      <div className='flex flex-col justify-center items-center mt-15.5 h-[100%]'>
        <h2 className='text-[25px] font-bold'>Edit Todo</h2>
      </div>

      <div className='flex flex-col justify-center gap-4 items-center h-[60vh]'>
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder='Edit Title'
          className='border-b focus:text-[20px] focus:border-b-3 focus:outline-none py-[-2px] focus:y-3 focus:h-[50px] focus:rounded w-[90%] h-[30px]'
        />
        <input
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder='Edit Description'
          className='border-b focus:text-[16px] focus:border-b-3 focus:outline-none py-[-2px] focus:y-3 focus:h-[50px] focus:rounded w-[90%] h-[30px]'
        />

        <div className='w-[90%] flex gap-6'>
          <button 
            onClick={handleUpdate} 
            className='cursor-pointer w-[80%] py-1.5 mt-4 bg-[#1da1f2] drop-shadow-[0px_0px_5px_rgba(0,0,0,1.6)] active:bg-[#00CCFF] active:py-2 active:w-[82%] active:text-[20px]'>
            Update
          </button>

          <button 
            onClick={handleCancel} 
            className='cursor-pointer w-[80%] py-1.5 mt-4 bg-[#1da1f2] drop-shadow-[0px_0px_5px_rgba(0,0,0,1.6)] active:bg-[#00CCFF] active:py-2 active:w-[82%] active:text-[20px]'>
=======
    editDiscription,
    setEditDiscription,
    editTitle,
    setEditTitle,
    storeTodos,
    setStoreTodos,
    setIsEditing,
    editId,
    setEditId,
    setIsDetailEditing,
  } = toDosValue();

  const handleUpdate = () => {
    let isValid = true;

    if (editTitle.trim() === "") {
      setTitleError("Title is required");
      isValid = false;
    }

    if (editDiscription.trim() === "") {
      setDescriptionError("Description is required");
      isValid = false;
    }

    if (!isValid) return;

    const updated = storeTodos.map((item) =>
      item.id === editId
        ? { ...item, title: editTitle, description: editDiscription }
        : item
    );

    setStoreTodos(updated);
    setEditTitle("");
    setEditDiscription("");
    setEditId(null);
    setIsEditing(false);
    setIsDetailEditing(false);
    setTitleError("");
    setDescriptionError("");
  };

  const handleCancel = () => {
    setEditTitle("");
    setEditDiscription("");
    setEditId(null);
    setIsEditing(false);
    setIsDetailEditing(false);
    setTitleError("");
    setDescriptionError("");
  };

  return (
    <div className="border w-[100%] h-[100%] text-amber-50">
      <h2 className={`${detail ? "text-black" : ""} flex mt-10 justify-center items-center text-[25px] font-bold`}>
        Edit Todo
      </h2>

      <div className={`flex flex-col justify-center gap-4 items-center ${detail ? "h-[40vh]":"h-[55vh]"}`}>
        <input
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
            if (e.target.value.trim()) setTitleError("");
          }}
          placeholder="Title"
          className={`${detail ? "text-black" : ""} border-b focus:text-[20px] focus:border-b-3 focus:outline-none focus:h-[50px] w-[90%] h-[30px]`}
        />
        {titleError && (
          <p className="text-red-400 text-sm -mt-3 w-[90%] text-left">
            {titleError}
          </p>
        )}

        <input
          value={editDiscription}
          onChange={(e) => {
            setEditDiscription(e.target.value);
            if (e.target.value.trim()) setDescriptionError("");
          }}
          placeholder="Description"
          className={`${detail ? "text-black" : ""} border-b  focus:text-[16px] focus:border-b-3 focus:outline-none focus:h-[50px] w-[90%] h-[30px]`}
        />
        {descriptionError && (
          <p className="text-red-400 text-sm -mt-3 w-[90%] text-left">
            {descriptionError}
          </p>
        )}

        <div className="flex gap-5 w-[100%] items-center justify-center">
          <button
            onClick={handleUpdate}
            className="transition-transform duration-200 hover:scale-104 cursor-pointer w-[30%] py-1.5 mt-4 bg-[#1da1f2] text-white drop-shadow-[0px_0px_5px_rgba(0,0,0,.6)] active:bg-[#00CCFF] active:scale-108 "
          >
            Update
          </button>
          <button
            onClick={handleCancel}
            className="transition-transform duration-200 hover:scale-104 cursor-pointer w-[30%] py-1.5 mt-4 bg-[#555] text-white drop-shadow-[0px_0px_5px_rgba(0,0,0,.6)] active:bg-[#888] active:scale-108 "
          >
>>>>>>> aa4244b (commit)
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
