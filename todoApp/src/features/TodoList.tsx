import { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([]);

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: completed }
                }
                return todo;
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return(
    <>
    <h1 className="header">ToDo List</h1>
      <ul className='list'>
        {todos.length === 0 && <li className='list-item'>Aint got any TODOs</li>}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}
                onChange={e => toggleTodo(
                  todo.id,
                  e.target.checked
                )}/>
                {todo.text}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
    )
}

export default TodoList;