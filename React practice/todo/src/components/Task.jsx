import React, { useState } from 'react'

const Task = (props) => {
    const TasksLocal = props.Tasks;
    const remaining = []

    for (let i = 0; i < TasksLocal.length; i++) {
        if (TasksLocal[i].status == true) {
            remaining.push(TasksLocal[i])
        }
    }
    console.log("remaingin")
    console.log(remaining)
    return (
        <>
            {!props.all && props.Tasks.status === 'false' ? < div className="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3" >
                <div>
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onClick={() => { props.onRadioClick(TasksLocal.id) }} />
                </div>
                <div>
                    {props.Tasks.status ? <label className="form-check-label" htmlFor="radioDefault1">
                        {TasksLocal.title}
                    </label> : <label className="form-check-label" htmlFor="radioDefault1">
                        <s>{TasksLocal.title}</s>
                    </label>}
                </div>
                <div>
                    <button onClick={() => { props.onDelete(TasksLocal.id) }}>Delete</button>
                </div>
            </ div > : "hello"
            }
        </>
    )
}

export default Task