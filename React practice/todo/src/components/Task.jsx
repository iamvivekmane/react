import React, { useState } from 'react'

const Task = (props) => {

    const TasksLocal = props.Tasks;

    return (
        <>
            < div className="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3 rounded-2" >
                <div>
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onClick={() => { props.checkTask(TasksLocal.id) }} />
                </div>
                <div>
                    {!props.Tasks.status ? <label className="form-check-label" htmlFor="radioDefault1">
                        {TasksLocal.title}
                    </label> : <label className="form-check-label" htmlFor="radioDefault1">
                        <s>{TasksLocal.title}</s>
                    </label>}
                </div>
                <div>
                    <button className='btn btn-danger' onClick={() => { props.deleteTask(TasksLocal.id) }}>Delete</button>
                </div>
            </ div >
        </>
    )
}

export default Task