import React, { useState, Component, useEffect, useRef } from "react";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
// import { TodoItem } from "./components/TodoItem";
import "./App.css";

function App() {

  const [todoLists, setTodoList] = useState([]);
  const delTodo = (index)=>{
    setTodoList([...todoLists.slice(0,index), ...todoLists.slice(index + 1)]);
  };
  const modTodo =(index) =>{
    const newTodoLists = [...todoLists];
    newTodoLists[index].isCompleted = !newTodoLists[index].isCompleted;
    setTodoList(newTodoLists);
  };
  console.log({todoLists})
  return (
    <>
    <InputTodo setTodoList={setTodoList}/>
    <TodoList todoLists={todoLists} delTodo={delTodo} modTodo={modTodo}/>
    </>
  
  )
}

export default App;
