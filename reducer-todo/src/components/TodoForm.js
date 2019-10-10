import React, {useState} from 'react';


const TodoForm = props => {
    const [input, setInput] = useState('');

   const handleChanges = e => {
     setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addItem(input);
        setInput('');
    };

    const clearItem = () => {
        props.clearItem();
    };

         return (
            <form onSubmit={handleSubmit}>

                <input
                type="text"
                value={input}
                name="todo"
                placeholder="...add todo"
                onChange={handleChanges}
                />

                <button className="add-btn">Add Todo</button>

                <button onClick={clearItem}>Clear Item</button>
            </form>
        );
    }


export default TodoForm;