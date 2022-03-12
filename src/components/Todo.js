import React from 'react';
import './css/Todo.css';

const Todo = ({ completed, text, deleteTodo, toggleTodo }) => {
    return (
        <div className='todo-item flex-container'>
            <button className='btn-completed flex-item' onClick={toggleTodo}>
                {completed ? 'Not done' : 'Done'}
            </button>

            <div style={{ textDecoration: completed ? 'line-through' : 'none'}}>
                {text}
            </div>

            <button className='btn-delete flex-item' onClick={deleteTodo}>
                Delete
            </button>
        </div>
    );
};
  
export default Todo;