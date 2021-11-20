import {useState} from "react";
import React from 'react'
import Todo from '../component/Todo'
import TodoForm from '../component/TodoForm'



const Store=()=>{
    const [todos, setTodos] = useState([
        { text: "task1" ,
            isCompleted: false
        },
        { text: "task2" ,
            isCompleted: false
        },
        { text: "task3" ,
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };
    return(
        <div>
            <div>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                        completeTodo={completeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>

    )

}
export default Store;