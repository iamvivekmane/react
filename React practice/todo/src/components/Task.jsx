import React from 'react'

const Task = (props) => {
    const TasksLocal = props.Tasks;

    // console.log(TasksLocal);
    // console.log(props.Tasks);


    // const deleteButton = () => {
    //     props.setCurrentIndex(TasksLocal.id);
    // }
    return (
        <div className="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3">
            <div>
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
            </div>
            <div>
                <label className="form-check-label" htmlFor="radioDefault1">
                    {TasksLocal.title}
                </label>
            </div>
            <div>
                <button onClick={() => { props.onDelete(TasksLocal.id) }}>Delete</button>
            </div>
        </div>
    )
}

export default Task