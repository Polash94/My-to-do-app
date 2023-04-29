import React, { useContext } from 'react';
import InputContext from './InputContext';
import Todo from './Todo';



const TodoInput = () => {

    const {handleInput,handleSubmit,todo,todoList} = useContext(InputContext);

    return (

        <div className=' bg-gradient-to-b from-blue-300 to-gray-500 min-h-screen '>
            <p className='text-xl font-bold border-b border-black py-5'>
                Enter a Todo
            </p>
            <form onSubmit={handleSubmit} className='my-5'>
                
                <input onChange={handleInput} type="text" required  placeholder='Eneter your Todo' className='p-1 border border-dark-300 rounded-md w-3/4' />
                <input type="submit" value='Submit' className=' bg-gradient-to-r from-red-400 to-blue-500 border border-dark-400 rounded-md ml-2 p-1' />
            </form>

                <Todo todoList={todoList}></Todo>
        </div>
    );
};

export default TodoInput;