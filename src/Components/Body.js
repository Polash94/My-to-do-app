import React from 'react';
import TodoInput from './TodoInput';
import { InputProvider } from './InputContext';
import { TodoProvider } from './TodoContext';

const Body = () => {
    return (
        <div className='bg-gray-600 w-1/2 text-center h-1/2'>
            <InputProvider>
            <TodoProvider>
                
                    <TodoInput></TodoInput>
               
            </TodoProvider>
            </InputProvider>


        </div>
    );
};

export default Body;