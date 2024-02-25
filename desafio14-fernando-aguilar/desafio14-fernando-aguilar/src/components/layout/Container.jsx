import "../layout/container.scss";
import  { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

//Clase 45 1:54 hr

export default function Container() {

    const [taskArray, setTaskArray] = useState([
        {
            id: 1,
            title: "Tarea 1",
            description: "Descripción 1",
            fav: false,
        },
        {
            id: 2,
            title: "Tarea 2",
            description: "Descripción 2",
            fav: false,
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

    const favTask = (id) => {
        // Buscamos el indice
        const index = taskArray.findIndex( (task) => task.id === id);

        // Clonamos la lista de tareas
        const favTaskArray = [...taskArray];

        // Modificamos el fav
        favTaskArray[index].fav = !favTaskArray[index].fav;

        // Actualiza el array
        setTaskArray(favTaskArray);
    }


    return (
        <>
            <section className="container">
                <h1>Lista de tareas</h1>
                <TaskForm>
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
                </TaskForm>
                <TaskList>
                    <div className='div-list'>
                        <h2>Tareas por hacer:</h2>
                        <div className='container-task'>
                            {taskArray.map((task) => (
                                <div key={task.id} className={task.fav ? 'div-task favTask' : 'div-task'}>
                                    <div className="div-input-container">
                                        <input type="text"
                                            value={task.title}
                                            onChange={ (e) => modifyTitle(task.id, e.target.value)} />
                                        <input type="text"
                                            value={task.description}
                                            onChange={ (e) => modifyDescription(task.id, e.target.value)} />
                                    </div>
                                    <div className="div-btn-container">
                                        <button className='task-btn material-symbols-outlined' onClick={() => removeTask(task.id)}>done</button>
                                        <button className='task-btn material-symbols-outlined' onClick={() => favTask(task.id)}>star</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TaskList>
            </section>
        </>
    )
}