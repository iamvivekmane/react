import React, { useState } from 'react'

const Task = (props) => {
    const TasksLocal = props.Tasks;

    // console.log(TasksLocal);
    // console.log(props.Tasks);


    // const deleteButton = () => {
    //     props.setCurrentIndex(TasksLocal.id);
    // }
    const [flag, setFlag] = useState(false)

    const onRadioClick = () => {
        if (flag) {
            setFlag(false);
        }
        else {
            setFlag(true)
        }
        console.log("clicked me")
    }
    return (
        <div className="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3">
            <div>
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onClick={onRadioClick} />
            </div>
            <div>
                {flag ? <label className="form-check-label" htmlFor="radioDefault1">
                    <s>{TasksLocal.title}</s>
                </label> : <label className="form-check-label" htmlFor="radioDefault1">
                    {TasksLocal.title}
                </label>}
            </div>
            <div>
                <button onClick={() => { props.onDelete(TasksLocal.id) }}>Delete</button>
            </div>
        </div>
    )
}

export default Task