import {  Routes, Route } from 'react-router-dom';
import EditTodo from './components/EditTodo';
import './App.css'
import Main from './components/Main';


const App = () => {
  return (
   
      <Routes>
        {/* <Route path="/" element={<AddTodo />} /> */}
        {/* <Route path="/" element={<AddTodo />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    
  );
};

export default App;










