import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import InputContext from './InputContext';


const Todo = ({todoList}) => {

  const {handleDelete} = useContext(InputContext)
  
 
  return (
    <div>
      
     {todoList.map((todo) =>
     
     <div className='bg-orange-400 m-2 p-3 flex justify-between align-middle text-center' key={todo.todo.id} >
      {todo.todo.title}
      <AiFillDelete className='text-red-900' onClick={()=> handleDelete(todo.todo.id)}></AiFillDelete>
      </div>

     )}
     
    </div>
  );
};

export default Todo;