import React from 'react';
import {useReducer} from 'react';
import {reducer, initialState} from './reducers/TodoReducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = item => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    });
  };

  const toggleItem = id => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: id
    });
  };

  const clearItem = () => {
    dispatch({
      type: 'CLEAR_ITEMS'
    });
  };

  return (
    <div className="App">
      <TodoForm addItem={addItem} clearItem={clearItem} />
      <TodoList todo={state.todo} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
