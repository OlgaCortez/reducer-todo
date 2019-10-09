import React from 'react';

const Todo = ({list, dispatch}) => {
    // const toggleComplete = () => {
    //     dispatch({
    //         type: 'TOGGLE_COMPLETED',
    //         payload: list.id
    //     });
    // };

    return(
        <div 
        className={`list${list.completed ? ' completed' : ''}`}
        onClick={() => dispatch({type: 'TOGGLE_COMPLETED'})}
        >
            <p>{list.item}</p>
        </div>
    )
};

export default Todo;