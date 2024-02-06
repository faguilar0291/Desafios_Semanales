import "./app.scss";
import { useState} from "react";


//clase 43 2:15
function App() {

    const Header = () => {
        return (
            <>
                <header className="header">

                </header>
            </>
        )
    }

    const TasksForm = () => {

        const inputTask = (task) => {
            
        }

        const btnAddTask = (e) => {
            e.preventDefault();
            
        }

        return (
        <>
            <form className="form__taskForm">
                <input className="input__taskForm"
                type="text" placeholder="New Task"
                onChange={(e) => inputTask(e.target.value)}/>
                <button className="btn__taskForm" onClick={btnAddTask}>Add Task</button>
            </form>
        </>
        );
    };


    const TasksList = () => {

        const [taskFormList, setTaskFormList] = useState([ "Hacer ejercicio 12", "Hacer ejercicio 14"]);
        console.log(taskFormList);

        return (
        <>
            <section className="section__task-list">
                <ul className="section__ul">
                    {taskFormList.map( (task, index) => (
                        <li key={index} className="ul__li">
                            <p>{task}</p>
                            <button onClick={ () => deleteTask(index)}>End Task</button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
        );
    };

    const Footer = () => {
        return (
            <>
                <footer>

                </footer>
            </>
        )
    }


    return (
        <>
            <Header />
            <main className="main">
                <h1>Tasks List:</h1>
                <TasksForm />
                <TasksList />
            </main>
            <Footer />
        </>
    );

}

export default App;
