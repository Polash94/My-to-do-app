import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const InputContext = createContext();



export function InputProvider ({children}) {

const [todo,setTodo] = useState();

const [todoList,setTodoList] = useState([]);

const handleInput = (event)=>{

    setTodo(
        {   title: event.target.value,
            id: uuidv4()
        }
        )
}

const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((prevState)=>[...prevState,{todo}])

    console.log(todo.title)
    console.log(todoList)
}

const handleDelete =(id)=>{
    console.log(id)
    const filtered = todoList.filter((todo)=>todo.todo.id !== id)

    console.log(filtered)
    setTodoList(filtered)

}



    return (
        <InputContext.Provider value={{handleInput,handleDelete,handleSubmit,todo,todoList}}>{children}</InputContext.Provider>
    )
}



export default InputContext;