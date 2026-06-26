import React from 'react'

const Task = (props) => {
    const Tasks = props.Tasks;
    console.log(Tasks.title);
    return (
        <div className="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3">
            <div>
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
            </div>
            <div>
                <label className="form-check-label" htmlFor="radioDefault1">
                    {Tasks.title}
                </label>
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Task