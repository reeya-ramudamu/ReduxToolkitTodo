

import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo } from '../features/todo/todoSlice';

const EditTodo = () => {
  const { id } = useParams();
  const todo = useSelector(state => state.todos.todos.find(todo => todo.id === id));
  const [editedText, setEditedText] = useState(todo ? todo.text : '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    if (editedText.trim() !== '') {
      dispatch(updateTodo({
        id,
        newText: editedText,
      }));
      navigate('/'); // Redirect back to Todos page after saving
    }
  };

  const handleCancel = () => {
    navigate('/'); // Redirect back to Todos page without saving
  };

  return (
    <div>
      <h2>Edit Todo</h2>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditTodo;