import React from 'react'
import { toDosValue } from '../Utility/TodoContex'

const Edit = () => {
    const{setEditDiscription,setEditTitle, editDiscription,editTitle }= toDosValue()
  return (
    <div>
        <input type='text' className='border' value={editTitle} onChange={(e)=>{
            setEditTitle(e.target.value)
        }}/>
        <input type='text' className='border' value={editDiscription} onChange={(e)=>{
            setEditDiscription(e.target.value)
        }}/>
    </div>
  )
}

export default Edit