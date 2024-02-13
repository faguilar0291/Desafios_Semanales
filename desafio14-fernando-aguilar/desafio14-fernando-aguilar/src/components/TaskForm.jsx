import  { useRef, useState } from 'react'
import TaskList from "./TaskList"

//Agregar proptypes

export default function TaskForm() {

    const [taskArray, setTaskArray] = useState([
        {
            id: 1,
            title: "Tarea 1",
            description: "Descripción 1",
        },
        {
            id: 2,
            title: "Tarea 2",
            description: "Descripción 2",
        },
    ]);

    const [inputNewTask , setInputNewTask] = useState("");
    const [inputNewTitle , setInputNewTitle] = useState("");

    const generateId = () => {
        let maxId = 0;
        taskArray.forEach( (task) => {
            if (task.id > maxId) {
                maxId = task.id;
            }
        });

        return maxId + 1;
    };

    const handleAddTitle = (e) => {
        setInputNewTitle(e.target.value);
    };

    const handleAddTask = (e) => {
        setInputNewTask(e.target.value);
    };

    const addTaskBtn = () => {
        if (inputNewTask.trim().length > 0) {
            // Crea una nueva tarea con un id nuevo (único)
            const newTask = {
                id: generateId(),
                title: inputNewTitle,
                description: inputNewTask,
            };

            // Actualiza la lista de tareas
            setTaskArray([...taskArray, newTask]);

            // Resetear el input de "Nueva tarea"
            setInputNewTitle("");
            setInputNewTask("");
        }

    };



    const modifyTitle = (id, value) => {
        
        // Buscamos el indice
        const index = taskArray.findIndex( (task) => task.id === id);

        // Clonamos la lista de tareas
        const cloneTaskArray = [...taskArray];

        // Modificamos el titulo
        cloneTaskArray[index].title = value;

        // Actualiza el titulo
        setTaskArray(cloneTaskArray);
    };

    const modifyDescription = (id, value) => {

        // Buscamos el indice
        const index = taskArray.findIndex( (task) => task.id === id);

        // Clonamos la lista de tareas
        const cloneTaskArray = [...taskArray];

        // Modificamos el titulo
        cloneTaskArray[index].description = value;

        // Actualiza el titulo
        setTaskArray(cloneTaskArray);
    };

    const removeTask = (id) => {
        // Buscamos el indice
        const index = taskArray.findIndex( (task) => task.id === id);

        // Removemos el elemento del array
        const deletedTaskList = taskArray.toSpliced(index, 1);

        // Actualiza el array
        setTaskArray(deletedTaskList);
    }



  return (
    <>
        <div className='div-form'>
            <label htmlFor='newTask' className='label-form'>Nueva tarea:</label>
            <div className='div-form-container'>
                <input
                type="text"
                id='newTask'
                placeholder='Titulo'
                value={inputNewTitle}
                onChange={(e) => handleAddTitle(e)}
                className='form-input'/>
                <input type="text"
                placeholder='Descripción'
                value={inputNewTask}
                onChange={(e) => handleAddTask(e)}
                className='form-input'/>
                <button onClick={addTaskBtn} className='form-btn material-symbols-outlined'>add_task</button>
            </div>
        </div>
        <TaskList>
            <div className='div-list'>
                <h2>Tareas por hacer:</h2>
                <div className='container-task'>
                    {taskArray.map((task) => (
                        <div key={task.id} className='div-task'>
                            <input type="checkbox" />
                            <div className="div-input-container">
                                <input type="text"
                                    value={task.title}
                                    onChange={ (e) => modifyTitle(task.id, e.target.value)} />
                                <input type="text"
                                    value={task.description}
                                    onChange={ (e) => modifyDescription(task.id, e.target.value)} />
                                {/* {task.completed && <span>Completada</span>} */}
                            </div>
                            <div className="div-btn-container">
                                <button className='task-btn material-symbols-outlined' onClick={() => removeTask(task.id)}>done</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </TaskList>
    </>
  )
}

//35:41 clase 45