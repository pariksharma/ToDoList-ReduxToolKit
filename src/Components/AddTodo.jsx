import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/Todo/TodoSlice'
import { changeColor } from '../features/ChangeColorSlice/ChangeColorSlice'
import './AddTodo.css'

function AddTodo() {
    const [input, setInput] = useState("");
    const [inputData, setInputData] = useState('rgb(0,0,0)')

    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input !== ""){
            dispatch(addTodo(input))
            setInput("")
        }
    }

    const col = useSelector(state => state.colorReducer)
    console.log(col)

    const handleChangeBackground = (value) => {
        // console.log(value)
        setInputData(value)
        dispatch(changeColor(value));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' className='todo' placeholder='Enter a Todo...' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit' className='add'>Add ToDo</button>
            <input type='color' onChange={(e) => handleChangeBackground(e.target.value)} value={inputData} />
        </form>
    </div>
  )
}

export default AddTodo