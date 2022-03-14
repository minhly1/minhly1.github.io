import React from 'react';
import { useNavigate } from "react-router-dom";
//containers
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterToolbar from './FilterToolbar'
import { connect } from 'react-redux'
import { toggleLogin } from '../actions/index.js'

function Homepage({isLogin, dispatch}) {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      
      {isLogin &&
        <div className="container persistent-header">
          <AddTodo />
          <FilterToolbar />
          <VisibleTodoList />
          <button
            type="button"
            className="todo-list-item-button logout-btn"
            onClick={() => {
              alert('You have successfully logged out!');
              dispatch(toggleLogin());
              navigate("/login");
            }}
          > 
            Logout 
          </button>
        </div>
      }   

      <br/> 
      <footer>Made by Lee Kim Min</footer>
    </div>
  );
}

export default connect(
  (state) => ({
    isLogin: state.login
  })
)(Homepage)