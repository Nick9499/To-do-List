import React, { useState, useEffect } from 'react';

import './App.css';
import Form from './Component/Form';
import ToDoList from './Component/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  
  useEffect(() => {
    getTodos();
  },[])
  useEffect(() => {
    filterHandler();
    saveTodos();
  }, [todos, status])
  

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
    }
  }

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h2>Nick's Todo List</h2>
      </header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos}
        inputText={inputText} setStatus={setStatus}  />
      <ToDoList todos={todos} setTodos = {setTodos}  filterTodos={filterTodos}/>
    </div>
  );
}

export default App;
