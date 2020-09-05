import React from 'react';
import Todo from './Todo';

const ToDoList = ({todos, setTodos, filterTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list" key={Math.random()}>
                {filterTodos.map((todo) => (
                    <Todo todos={todos} setTodos={setTodos} text={todo.text}
                        id={todo.id} todo={todo}  />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;