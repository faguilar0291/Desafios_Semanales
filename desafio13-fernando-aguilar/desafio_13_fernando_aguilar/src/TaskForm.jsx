import { useState } from "react";
import taskArray from "./TaskList";

const TasksForm = () => {

    const [formData, setFormData] = useState({ title: "", description: "" });

    const handleChange = ({target}) => {
        setFormData({ ...formData, [target.name]: target.value})
    }

    const addTask = (e) => {
        e.preventDefault();
        if (formData && formData.description) {
            const task = formData;
            task.complete = false;
            task.id = taskArray.length + 1;

            console.log(task);
        }
    }

    return (
    <>
        <section className="form__container">
            <h1>To do List</h1>
            <form className="form" onSubmit={addTask}>
                <input type="text" name="title" placeholder="Task title" className="form__title" value={FormData.title} onChange={handleChange}/>
                <input type="text" name="description" placeholder="Task description" className="form__description" value={FormData.description} onChange={handleChange}/>
                <button className="form__submit"><span className="material-symbols-outlined">subdirectory_arrow_left</span></button>
            </form>
        </section>
    </>
    );
};

export default TasksForm;
