import React, { useState } from 'react'
import { toDosValue } from '../../Utility/TodoContex'

const ShowTodo = ({searchTodos}) => {
  const[edit,setEdit]=useState(null)
    const{storeTodos,setStoreTodos,setEditDiscription,setEditTitle, editDiscription,editTitle }=toDosValue()

    const filteredTodos=storeTodos.filter((item)=>
      item.title.toLowerCase().includes(searchTodos.toLowerCase())
    )
  return (
    <>
 <div>
        {filteredTodos && filteredTodos.map((item) => {
          return (
            <div key={item.id} className='border'>
              <div>{item.title}</div>
              <div>{item.description}</div>

              <button onClick={() => {
                let filterData = storeTodos.filter((i) => i.id !== item.id)
                setStoreTodos(filterData)
              }}>DEL</button>

              <button onClick={() => {
                setEdit(item.id)
                setEditTitle(item.title)
                setEditDiscription(item.description)
              }}>Edit</button>

              <button onClick={() => {
                let updateData = storeTodos.map((upitem) => {
                  if (upitem.id === edit) {
                    return { ...upitem, title: editTitle, description: editDiscription }
                  }
                  return upitem
                })
                setStoreTodos(updateData)
                setEditTitle('')
                setEditDiscription('')
              }}>Update</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ShowTodo