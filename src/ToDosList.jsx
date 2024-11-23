import React from 'react'
import TodoItem from './TodoItem'

const ToDosList = ({todos, toggleTodo, deleteTodo}) => {
  return (
    <ul className='item-list'>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      )
      
      })}
      
    </ul>
  )
}

export default ToDosList
