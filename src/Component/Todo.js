import React from 'react';

const Todo = ({ text, todos, todo, setTodos }) => {
    const deleteHandler = () => {
         setTodos(todos.filter((e) => e.id !== todo.id));
    
    }
    const completeHandler = () => {
        setTodos(todos.map((i) => {
            if (i.id === todo.id) {
                return {
                    ...i, completed: !i.completed
                };
            }
            return i;
        }));
    }

    return (
     <div className="todo">
        <li className={` ${todo.completed? "completed" : ''}`}>{text} </li>
        <button className="complete-btn" onClick={completeHandler}>
            <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
        </button>
     </div>
    );
};

export default Todo;
