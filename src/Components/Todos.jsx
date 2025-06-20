import AddTodo from './AddTodo'
import ShowTodo from './ShowTodo'
import Edit from './Edit'
import TodoSearch from './TodoSearch'
import { toDosValue } from '../../Utility/TodoContex'
import { useState } from 'react'

const Todos = () => {
  const [searchTodos, setSearchTodos] = useState('')
  const { isEditing } = toDosValue()
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Todo List</h1>
      <TodoSearch setSearchTodos={setSearchTodos} />
      <div className="bg-white p-6 rounded shadow-md space-y-6">
        {isEditing ? <Edit /> : <AddTodo />}
        <ShowTodo searchTodos={searchTodos} />
      </div>
    </div>
  )
}

export default Todos
