import React from 'react';
import { useSelector } from "react-redux";
import Todo from './Todo';


const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
          {todos.map((todo) => (
            <Todo todo = {todo} key= {todo.id} />
          ))}
   

        </div>
  )
}

export default TodoList