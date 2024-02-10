import './app.scss';
import TaskForm from './components/TaskForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';



function App() {
  return (
    <>
        <Header />
        <section className="container">
            <h1>Lista de tareas</h1>
            <TaskForm />
        </section>
        <Footer />
    </>
  );
}

export default App;
