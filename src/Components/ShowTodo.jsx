import React from 'react'
import { toDosValue } from '../../Utility/TodoContex'

const ShowTodo = () => {
    const{storeTodos}=toDosValue()
  return (
    <>
    <div>
        {storeTodos && storeTodos.map((item,index)=>{
            return(
                <div key={index}>
                <div>{item.title}</div>
                <div>{item.description}</div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default ShowTodo