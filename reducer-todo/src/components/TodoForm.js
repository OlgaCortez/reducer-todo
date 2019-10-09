import React, {useState} from 'react';


const TodoForm = ({dispatch}) => {
    const [item, setItem] = useState('');

   const handleChanges = e => {
     setItem(e.target.value);
    };

    const submitTodo = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
        setItem('');
    };

         return(
            <form onSubmit={submitTodo}>
                <input
                type="text"
                value={item}
                name="todo"
                placeholder="...add todo"
                onChange={handleChanges}
                />
                <button className="add-btn">Add Todo <i class="fas fa-plus"></i></button>
            </form>
        );
    }


export default TodoForm;