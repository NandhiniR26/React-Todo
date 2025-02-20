import React from 'react'
import {useState} from "react"
import Task from './Task'
import './App.css'
const App = () => {

const [todoList,setTodoList]= useState([])
const[newTask,setNewTask]= useState("")


const handleChange=(event)=>{
  setNewTask(event.target.value)
}

const addTodo = () => {
  const task = {
    id: todoList.length === 0 ? 1: todoList [todoList.length -1].id + 1,
    taskName: newTask,
    completed: false,
  }
  setTodoList(task.taskName !=="" ? [...todoList,task] : todoList);
}

const deleteTask = (id) => {
  setTodoList(todoList.filter((task)=>task.id !== id));
}

const completeTask = (id) => {
  setTodoList(
    todoList.map((task)=>{
      if(task.id ===id) {
        return {...task, completed:true};
      } else {
        return task;
      }
    })
  )
}

  return (
    <div className = "App">My Todo
      <div className="addTask">
        <input onChange = {handleChange} placeholder = "Todo Name..." size="50"/>
        <button onClick= {addTodo} > Add Todo </button>
      </div>
      <div className="list">
        {todoList.map((task)=>{
          return (
          <Task 
          taskName= {task.taskName} 
          id = {task.id}
          completed={task.completed}
          deleteTask= {deleteTask}
          completeTask = {completeTask}
          />
          )
        })}
      </div>
    </div>
  )
}

export default App;
