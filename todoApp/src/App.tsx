import { useState } from 'react'
import './App.css'
import crypto from 'crypto'
import TodoForm  from './features/TodoForm'
import TodoList from './features/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false
        }
      ]
    })
  }

  return (
    <>
      <TodoForm onSubmit={addTodo}/>
      <TodoList/>
    </>
  )
}

export default App
