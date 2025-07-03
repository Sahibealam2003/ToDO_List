import React, { useState } from 'react'
import { toDosValue } from '../../Utility/TodoContex'
import { v4 as uuid } from 'uuid'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')

  const { storeTodos, setStoreTodos } = toDosValue()

  function onSubmitHandler() {
    let valid = true;

    if (!title.trim()) {
      setTitleError("Title is required")
      valid = false;
    }

    if (!description.trim()) {
      setDescriptionError("Description is required")
      valid = false;
    }

    if (!valid) return;

    setStoreTodos([...storeTodos, { title, description, id: uuid() }])
    setTitle('')
    setdescription('')
    setTitleError('')
    setDescriptionError('')
  }

  return (
    <div className='border w-[100%] h-[100%] p-4 text-amber-50'>
      <div>
        <svg
          className="w-[30px] h-[30px]"
          width="70"
          height="70"
          viewBox="0 0 320 291"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content */}
        </svg>
        <div className='flex justify-center items-center'>
          <h1 className='text-[25px] font-bold'>Add new thing</h1>
        </div>
      </div>

      <div className='flex flex-col justify-center gap-4 items-center h-[60vh]'>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            if (e.target.value.trim()) setTitleError('')
          }}
          placeholder="Enter Title"
          className='border-b focus:text-[20px] focus:border-b-3 focus:outline-none focus:h-[50px] w-[90%] h-[30px]'
        />
        {titleError && (
          <p className="text-red-400 text-sm -mt-3 w-[90%] text-left">
            {titleError}
          </p>
        )}

        <input
          type="text"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value)
            if (e.target.value.trim()) setDescriptionError('')
          }}
          placeholder="Enter Description"
          className='border-b focus:text-[16px] focus:border-b-3 focus:outline-none focus:h-[50px] w-[90%] h-[30px]'
        />
        {descriptionError && (
          <p className="text-red-400 text-sm -mt-3 w-[90%] text-left">
            {descriptionError}
          </p>
        )}

        <button
          onClick={onSubmitHandler}
          className='transition-transform duration-200 hover:scale-104 cursor-pointer w-[80%] py-1.5 mt-4 bg-[#1da1f2] drop-shadow-[0px_0px_5px_rgba(0,0,0,1.6)] active:bg-[#00CCFF] active:scale-108'
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddTodo
