
  import  { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { addTodo } from '../features/todo/todoSlice';
  import './AddTodo.css'; // Import the CSS file
  
  function AddTodo() {
      const [input, setInput] = useState('');
      const dispatch = useDispatch();
  
      const addTodoHandler = (e) => {
          e.preventDefault();
          if (input.trim() !== '') {
              dispatch(addTodo(input));
              setInput('');
          }
          
      };
  
      return (
          <form 
           onSubmit={addTodoHandler} 
           className="form-container">
              <input
                  type="text"
                  className='input-field'
                  placeholder='Enter a Todo...'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />
              <button
                  type="submit"
                  className='submit-button'>
                  Add Todo
              </button>
          </form>
      );
  }
  
  export default AddTodo;