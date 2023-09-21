import { useState } from 'react'

function TodoForm({ onSubmit }) {
    
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(newItem === "") return;
        onSubmit(newItem);

        setNewItem("");
    }

    return (
        <form className='new-ToDo-item' onSubmit={handleSubmit}>
            <div className='form-row'>
                <label htmlFor="item">Enter ToDo</label>
                <input
                    type="text"
                    name="todo"
                    id="item"
                    placeholder='Enter Item Here'
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)} />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}

export default TodoForm;