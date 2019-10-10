import React from 'react';

const Todo = props => {
    const toggleItem = () => {
        props.toggleItem(props.item.id);
    };
    
   return (
        <div 
        className={`todo${props.item.completed ? ' completed' : ''}`}

        onClick={toggleItem}

        style={{ textDecoration: props.item.completed ? "line-through" : ""}}>

            <p>{props.item.item}</p>
        </div>
    )
};

export default Todo;