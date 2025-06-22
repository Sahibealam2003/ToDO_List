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
    <>
      <div className='border flex justify-center items-center gap-10 w-[100%] min-h-[100vh] bg-[#ADD8E6] '>


        <div className="border w-[35%] h-[80vh] bg-[#2E2787]">
          {isEditing ? <Edit /> : <AddTodo />}
        </div>

        <div className='w-[35%] min-h-[80vh] bg-amber-50'>
          <TodoSearch setSearchTodos={setSearchTodos} />
          <ShowTodo searchTodos={searchTodos} />
        </div>
      </div>

    </>
  )
}

export default Todos
