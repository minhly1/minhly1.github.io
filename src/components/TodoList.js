import React from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <div className='todo-list'>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      )}
    </div>
  )

export default TodoList;