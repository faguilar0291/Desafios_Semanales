const TasksForm = () => {
    return (
    <>
        <section className="form__container">
            <h1>To do List</h1>
            <form className="form">
                <input type="text" placeholder="Task title" className="form__title"/>
                <input type="text" placeholder="Task description" className="form__description"/>
                <button className="form__submit"><span className="material-symbols-outlined">subdirectory_arrow_left</span></button>
            </form>
        </section>
    </>
    );
};

export default TasksForm;
