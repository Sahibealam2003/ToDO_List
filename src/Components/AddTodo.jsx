import React, { useState } from 'react'
import { toDosValue } from '../../Utility/TodoContex'
import {v4 as uuid} from 'uuid'

const AddTodo = () => {
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const { storeTodos, setStoreTodos } = toDosValue()
    
    

    function onTitleChange(e) {
        setTitle(e.target.value)

    }

    function ondescriptionChange(e) {
        setdescription(e.target.value)

    }
    function onSubmitHandler() {
        if (!title || !description) {
            return
        }
        setStoreTodos([...storeTodos, { title, description , id: uuid() }])
        setTitle('')
        setdescription('')
    }
    return (
        <>
            <div>
                <input type='text' value={title} onChange={onTitleChange} className='border' />
                <input type='text' value={description} onChange={ondescriptionChange} className='border' />
                <button onClick={onSubmitHandler}>Submit</button>
            </div>
        </>
    )
}

export default AddTodo