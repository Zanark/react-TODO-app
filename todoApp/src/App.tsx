import './App.css'

function App() {
  return (
    <>
      <form className='new-ToDo-item'>
        <div className='form-row'>
          <label htmlFor="item">Enter ToDo</label>
          <input type="text" name="todo" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDo List</h1>
      <li>
        <label htmlFor="isCompleted"> Item </label>
        <input type="checkbox" name="isCompleted" id="isCompleted" />
      </li>
    </>
  )
}

export default App
