

import { useSelector, useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { removeTodo } from '../features/todo/todoSlice';
import './Todos.css'; // Import the CSS file

const Todos = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="todosList">
      <div className="todos-header">Todos</div>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button
              className="update-button"
              onClick={() => handleEdit(todo.id)}
            >
              Edit
            </button>
            <button
              className="remove-button"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
















// import { useSelector, useDispatch } from 'react-redux';
// import {  useNavigate } from 'react-router-dom';
// import { removeTodo } from '../features/todo/todoSlice';
// import './Todos.css'; // Import the CSS file

// const Todos = () => {
//   const todos = useSelector(state => state.todos.todos);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleEdit = (id) => {
//     navigate(`/edit/${id}`);
//   };

//   return (
//     <div className="todosList">
//       <div className="todos-header">Todos</div>
//       <ul className="todos-list">
//         {todos.map((todo) => (
//           <li key={todo.id} className="todo-item">
//             {todo.text}
//             <button
//               className="update-button"
//               onClick={() => handleEdit(todo.id)}
//             >
//               Edit
//             </button>
//             <button
//               className="remove-button"
//               onClick={() => dispatch(removeTodo(todo.id))}
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todos;








// //=============================================================================================
// // import { useState } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { removeTodo, updateTodo } from '../features/todo/todoSlice';
// // import './Todos.css'; // Import the CSS file

// // const Todos = () => {
// //     const todos = useSelector(state => state.todos.todos);
// //     const dispatch = useDispatch();
// //     const [editingId, setEditingId] = useState(null);
// //     const [newText, setNewText] = useState('');

// //     const startEditHandler = (id, currentText) => {
// //         setEditingId(id);
// //         setNewText(currentText);
// //     };

// //     const saveEditHandler = (id) => {
// //         if (newText.trim() !== '') {
// //             dispatch(updateTodo({
// //                 id,
// //                 newText
// //             }));
// //             setEditingId(null);
// //             setNewText('');

// //         }
// //     };

// //     const cancelEditHandler = () => {
// //         setEditingId(null);
// //         setNewText('');
// //     };

// //     return (
// //         <div className="todosList">
// //             <div className="todos-header">Todos</div>
// //             <ul className="todos-list">
// //                 {todos.map((todo) => (
// //                     <li key={todo.id} className="todo-item">
// //                         {editingId === todo.id ? (
// //                             <>
// //                                 <input
// //                                     type="text"
// //                                     value={newText}
// //                                     onChange={(e) => setNewText(e.target.value)}
// //                                     className="edit-input"
// //                                 />
// //                                 <button
// //                                     className="save-button"
// //                                     onClick={() => saveEditHandler(todo.id)}
// //                                 >
// //                                     Save
// //                                 </button>
// //                                 <button
// //                                     className="cancel-button"
// //                                     onClick={cancelEditHandler}
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                             </>
// //                         ) : (
// //                             <>
// //                                 {todo.text}
// //                                 <button
// //                                     className="update-button"
// //                                     onClick={() => startEditHandler(todo.id, todo.text)}
// //                                 >
// //                                     Edit
// //                                 </button>
// //                                 <button
// //                                     className="remove-button"
// //                                     onClick={() => dispatch(removeTodo(todo.id))}
// //                                 >
// //                                     X
// //                                 </button>
// //                             </>
// //                         )}
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default Todos;


// //============================================================================
// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { removeTodo ,updateTodo} from '../features/todo/todoSlice';
// // import './Todos.css'; // Import the CSS file

// // const Todos = () => {
// //    const todos = useSelector(state => state.todos);
// //    const dispatch = useDispatch();

// //    return (
// //      <>
// //      <div className="todosList">
// //        <div className="todos-header">Todos</div>
// //        <ul className="todos-list">
// //          {todos.map((todo) => (
// //            <li key={todo.id} className="todo-item">
// //              {todo.text}
             
              
// //              <button
// //                className="update-button"
// //                onClick={() => dispatch(updateTodo(todo.id))}
// //              >
// //                Edit
// //              </button>
// //              <button
// //                className="remove-button"
// //                onClick={() => dispatch(removeTodo(todo.id))}
// //              >
// //                X
// //              </button>
// //            </li>
// //          ))}
// //        </ul>
// //     </div>
// //      </>
// //    );
// // }

// // export default Todos;
// //==========================================================================


// import { useSelector, useDispatch } from 'react-redux';
// // import { Link } from 'react-router-dom';
// import { removeTodo } from '../features/todo/todoSlice';
// import './Todos.css'; // Import the CSS file



// import { Link } from 'react-router-dom';

// const Todos = () => {
//   const todos = useSelector((state) => state.todos.todos); 
//   // Accessing todos from the Redux state
//      const dispatch = useDispatch();

//   if (!Array.isArray(todos)) {
//     console.error('todos is not an array', todos);
//     return null;
//   }

//   return (
//     <div className="todosList">
//       <h1>Todo List</h1>
//       <ul className="todos-list">
//         {todos.map((todo) => (
//           <li key={todo.id} className="todo-item" >
//             {todo.title}
//             <Link
//             className="button-link"
//             to={`/edit/${todo.id}`}>
//               Edit
//             </Link>
//             <button className="remove-button"
//                onClick={() => dispatch(removeTodo(todo.id))}>
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//       {/* <Link to="/add">Add Todo</Link> */}
//     </div>
//   );
// };

// export default Todos;

