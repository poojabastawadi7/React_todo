import { useEffect, useState } from 'react'

import './App.css'
import NewTodoForm from './NewTodoForm';
import ToDosList from './ToDosList';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

 const addTodo = (title) => {
  setTodos((currentTodos) => {
    return[
      ...currentTodos, 
      {id: crypto.randomUUID(), title, completed: false }
    ]
  })
  
 }

    const toggleTodo = (id, completed) => {
     setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo;
      })
     })
    }

    const deleteTodo = (id) =>{
      setTodos(currentTodos => {
       return currentTodos.filter(todo => todo.id !== id)
      })
    }
    
  
  return(
    <>
    
    <NewTodoForm onSubmit={addTodo} />
    <h1 className='list-header'>TODO List</h1>
    <ToDosList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    
    
    </>
  )

}
export default App
