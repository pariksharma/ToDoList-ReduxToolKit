import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/Todo/TodoSlice';
import './Todos.css'

function Todos() {

    const dispatch = useDispatch();
    const Todos = useSelector((state) => state.todo.todos);

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    console.log(Todos)
    // console.log(Todos.text === undefined)
    return (<>
        <div className='cont'><h2>My Todos</h2>
            {Todos.map((todo, index) => {
                return <div key = {index}>
                    {todo.text !== undefined ? <div className='todolist'>
                <li >{todo.text}</li>
                <button onClick={()=> handleDelete(todo.id)}>Delete</button>
                </div>
                   : "" }
                </div>
            })}
            </div>
            
        
    </>
  )
}

export default Todos