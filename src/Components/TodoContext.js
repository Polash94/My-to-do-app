import { createContext, useState ,useContext} from "react";


const TodoContext = createContext();


export function TodoProvider({children}){

    const [todoList,setTodoList] = useState([]);

  
       
    return (
        <TodoContext.Provider value={{todoList,setTodoList}}>{children}</TodoContext.Provider>
    )
}


export default TodoContext;