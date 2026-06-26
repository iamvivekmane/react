import React, { useState } from 'react'
import Task from './Task'

const Hero = () => {
    const [Tasks, setTasks] = useState(
        [{ id: 0, title: "Make", status: "true" },
        { id: 1, title: "Take", status: "false" }
            ,]
    )
    return (
        <>
            <h2 className='text-center'>My tasks</h2>
            <div className="container d-flex align-items-center justify-content-center flex-column gap-3 pt-5">
                <form className="row g-3">
                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="visually-hidden">Task</label>
                        <input type="text" className="form-control" id="inputPassword2" placeholder="New task" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Add task</button>
                    </div>
                </form>
                <div className='container d-flex flex-start align-items-center justify-content-center gap-2'>
                    <button className='btn btn-primary'>All</button>
                    <button className='btn btn-primary'>Active</button>
                    <button className='btn btn-primary'>Done</button>
                </div>
                <div>
                    {
                        Tasks.map((element) => {
                            return <Task Tasks={element} key={element.id} />
                        })
                    }
                </div>
                <div>
                    <button className='btn btn-primary'>Clear done</button>
                </div>
            </div>
        </>
    )
}

export default Hero