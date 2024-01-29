import "./app.scss";
import TasksForm from "./TaskForm";
import TasksList from "./TaskList";

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
