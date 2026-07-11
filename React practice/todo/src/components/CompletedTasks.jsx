import React, { useState } from 'react'

const CompletedTasks = (props) => {

    const TasksLocal = props.Tasks;

    return (
        <>
            {TasksLocal.status === true ? < div className="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3 rounded-2" >
                <div>
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onClick={() => { props.checkTask(TasksLocal.id) }} />
                </div>
                <div>
                    <label className="form-check-label" htmlFor="radioDefault1">
                        <s>{TasksLocal.title}</s>
                    </label>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={() => { props.deleteTask(TasksLocal.id) }}>Delete</button>
                </div>
            </ div > : ""
            }
        </>
    )
}

export default CompletedTasks