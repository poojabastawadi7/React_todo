import React, { useState } from 'react'

const NewTodoForm = ({onSubmit}) => {
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    
        onSubmit(newItem)
        setNewItem("")
    
      }

  return (
    <form onSubmit={handleSubmit} className='items-form'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input 
            type='text'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            id='item'
        />
      </div>
      <button type="submit" className='btn' >Add Item</button>
    </form>
  )
}

export default NewTodoForm
