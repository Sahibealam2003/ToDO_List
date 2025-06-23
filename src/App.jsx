import React from 'react'
import Todos from './Components/Todos'
import { Route, Routes } from 'react-router-dom'
import TodoDetail from './Components/TodoDetail'
const App = () => {
  return (
    <div>
<Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/details/:id" element={<TodoDetail />} />
    </Routes>
      
    </div>
  )
}

export default App
