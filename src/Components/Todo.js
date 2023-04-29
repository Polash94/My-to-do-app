import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import InputContext from './InputContext';


const Todo = ({todoList}) => {

  const {handleDelete} = useContext(InputContext)
  
 
  return (
    <div>
      
     {todoList.map((todo) =>
     
     <div className=' bg-transparent border-solid border-4 border-gray-500 rounded-md mt-10 drop-shadow-lg m-2 p-3 flex justify-between align-middle text-center' key={todo.todo.id} >
      {todo.todo.title}
      <div className='bg-red-600 h-[40px] w-[40px] flex justify-center items-center cursor-pointer hover:scale-105 border hover:rounded-md'>
      <AiFillDelete className='text-white text-2xl ' onClick={()=> handleDelete(todo.todo.id)}></AiFillDelete>
      </div>
      </div>

     )}
     
    </div>
  );
};

export default Todo;