import React from 'react'
import Task from './Task'

const Hero = () => {
    return (
        <>
            <h2 className='text-center'>My tasks</h2>
            <div className="container d-flex align-items-center justify-content-center flex-column gap-3 pt-5">
                <form class="row g-3">
                    <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">Task</label>
                        <input type="text" class="form-control" id="inputPassword2" placeholder="New task" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Add task</button>
                    </div>
                </form>
                <div className='container d-flex flex-start align-items-center justify-content-center gap-2'>
                    <button className='btn btn-primary'>All</button>
                    <button className='btn btn-primary'>Active</button>
                    <button className='btn btn-primary'>Done</button>
                </div>
                <div>
                    <Task />
                </div>
                <div className>
                    <button className='btn btn-primary'>Clear done</button>
                </div>
            </div>
        </>
    )
}

export default Hero