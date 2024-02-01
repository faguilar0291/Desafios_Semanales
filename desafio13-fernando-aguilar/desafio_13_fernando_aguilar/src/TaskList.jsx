import { useState } from "react";

const TasksList = () => {

    const [taskArray, setTaskArray ] = useState([
                {
                    title: "Hacer el ejercicio 14",
                    description: "Realizar la lectura de la consiga y empezar a programar",
                    complete: false,
                    id: 1,
                },
                {
                    title: "Hacer el ejercicio 15",
                    description: "Realizar la lectura de la consiga y empezar a programar",
                    complete: false,
                    id: 2,
                },
                {
                    title: "Hacer el ejercicio 13",
                    description: "Realizar la lectura de la consiga y empezar a programar",
                    complete: true,
                    id: 3,
                },
            ]
        );

    


    const completedTask = taskArray.filter( task => task.complete === true).length;
    const pendingTask = taskArray.filter( task => task.complete === false).length;

    return (
    <>
        <section className="section">
            <div className="section__up">
                <h3>Task List</h3>
                <button>Clean completed Tasks</button>
            </div>
            {
                taskArray.map( (task) =>
                    <div key={task.id} className="task-container">
                        <input type="checkbox" />
                        <div className="task-data">
                            <h2 className="task-title">Title: {task.title}</h2>
                            <p className="task-description">Description: {task.description}</p>
                        </div>
                        {task.complete && <span className="status-complete">Completado</span>}
                        <button><span className="material-symbols-outlined">delete</span></button>
                    </div>
                )
            }
            <div className="section__down">
                <span>Total tasks: {taskArray.length}, Completed: {completedTask}, Pending: {pendingTask}</span>
            </div>
        </section>
    </>
    );
};

export default TasksList;
