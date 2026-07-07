import React, { useState } from 'react'

const Task = (props) => {
    const TasksLocal = props.Tasks;

    // console.log(TasksLocal);
    console.log(props.Tasks);


    // const deleteButton = () => {
    //     props.setCurrentIndex(TasksLocal.id);
    // }



    return (
        <div className="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3">
            <div>
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onClick={() => { props.onRadioClick(TasksLocal.id) }} />
            </div>
            <div>
                {/* {props.status ? <label className="form-check-label" htmlFor="radioDefault1">
                    <s>{TasksLocal.title}</s>
                </label> : <label className="form-check-label" htmlFor="radioDefault1">
                    {TasksLocal.title}
                </label>} */}


                {props.Tasks.status ? <label className="form-check-label" htmlFor="radioDefault1">
                    {TasksLocal.title}
                </label> : <label className="form-check-label" htmlFor="radioDefault1">
                    <s>{TasksLocal.title}</s>
                </label>}
            </div>
            <div>
                <button onClick={() => { props.onDelete(TasksLocal.id) }}>Delete</button>
            </div>
        </div>
    )
}

export default Task