import "./app.scss";
import { useState } from "react";
import TasksForm from "./TaskForm";
import TasksList from "./TaskList";

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
                    <TasksForm />
                    <TasksList />
            </main>
            <Footer />
        </>
    );
}

export default App;
