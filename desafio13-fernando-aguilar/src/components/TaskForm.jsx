import React, { useRef } from 'react'
import { useState } from 'react';
import TaskList from './TaskList';

//Agregar proptypes

export default function TaskForm() {

    const [inputText, setInputText] = useState([]);
    const inputTextRef = useRef();

    const handleText = (text) => {
        inputTextRef.current = text;
    };

    const addTask = () => {
        const newTask = [...inputText, inputTextRef.current];
        setInputText(newTask);
    };

    const removeTask = (index) => {
        const modifiedList = inputText.toSpliced(index, 1);
        setInputText(modifiedList);
    };

  return (
    <>
        <div className='div-form'>
            <input type="text" onChange={(e) => handleText(e.target.value)} className='form-input'/>
            <button onClick={addTask} className='form-btn'>Agregar Tarea</button>
        </div>
        <TaskList>
            <div className='div-list'>
                <h2>Tareas por hacer:</h2>
                <div className='container-task'>
                    {inputText.map((task, index) => (
                        <div key={index} className='div-task'>
                            <p>{task}</p>
                            <button onClick={() => removeTask(index)}>x</button>
                        </div>
                    ))}
                </div>
            </div>
        </TaskList>
    </>
  )
}

// {
//     inputText.map((task, index) => {
//         <p key={index}>{task}</p>
//     })
// }