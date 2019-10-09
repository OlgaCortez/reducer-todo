import React, {useReducer} from 'react';
import {list, TodoReducer} from '../reducers/TodoReducer';
import Todo from './Todo';

const TodoList = () => {
    const [{dispatch}] = useReducer(list, TodoReducer);

 
    return (
        <div className="todo-list">
            {list.map(list => (
                <Todo key={list.id} list={list} dispatch={dispatch} />
            ))}
            <button className="clear-btn" onClick={() => dispatch({ type: 'CLEAR'})}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;
