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
      <div className='border flex justify-center items-center gap-10 w-[100%] min-h-[100vh]  bg-gradient-to-br from-[#2c2c2c] via-[#585858] to-[#bdbdbd] '>


        <div className="drop-shadow-[10px_14px_16px_rgba(0,0,0,0.5)] w-[35%] h-[80vh] bg-[#585858] shadow-2xl">
          {isEditing ? <Edit /> : <AddTodo />}
        </div>

        <div className=' w-[35%]  min-h-[80vh] bg-[#585858] drop-shadow-[10px_14px_16px_rgba(0,0,0,0.5)] shadow-2xl'>
          
          <TodoSearch setSearchTodos={setSearchTodos} />
          <ShowTodo searchTodos={searchTodos} />
          
        </div>

      </div>
        <div className='relative'>
        <h1 className='absolute -top-8 left-[42%] font-medium text-[#585858]'>Made by Sahib e Alam</h1>

        </div>
    </>
  )
}

export default Todos
