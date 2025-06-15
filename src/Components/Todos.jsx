import React, { useState } from 'react'
import AddTodo from './AddTodo'
import ShowTodo from './ShowTodo'
import Edit from '../Edit'
import TodoSearch from './TodoSearch'

const Todos = () => {
  const [searchTodos,setSearchTodos] =useState('')
  return (
    <div>
    <TodoSearch setSearchTodos={setSearchTodos} />
      <AddTodo/>
      <ShowTodo searchTodos={searchTodos}/>
      <Edit/>
    </div>
  )
}

export default Todos