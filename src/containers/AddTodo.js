import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/index.js'


const AddTodo = ({ dispatch }) => {

    let userInput

    const handleSubmit = (event) => {
        event.preventDefault();
        //check if input is null or have many white space
        if (!userInput.value.trim()) return;
        dispatch(addTodo(userInput.value))
        userInput.value = ''
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={node => userInput = node} placeholder="What needs to be done?"/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);