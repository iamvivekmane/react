import React, { useState } from 'react'

const Active = (props) => {
    const TasksLocal = props.Tasks;
    console.log("active")
    console.log(TasksLocal)
    return (
        <>
            {TasksLocal.status === false ? < div className="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3" >
                <div>
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onClick={() => { props.onRadioClick(TasksLocal.id) }} />
                </div>
                <div>
                    <label className="form-check-label" htmlFor="radioDefault1">
                        {TasksLocal.title}
                    </label>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={() => { props.onDelete(TasksLocal.id) }}>Delete</button>
                </div>
            </ div > : ""
            }
        </>
    )
}

export default Active
