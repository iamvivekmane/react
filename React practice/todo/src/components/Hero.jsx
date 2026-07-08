import React, { useState } from 'react'
import Task from './Task'

const Hero = () => {
    const [Tasks, setTasks] = useState(
        [
            { id: 0, title: "Make", status: "false" },
            { id: 1, title: "Take", status: "false" },
            { id: 3, title: "Take", status: "true" },
            { id: 4, title: "Take", status: "true" },
            { id: 5, title: "Take", status: "true" }
        ]
    )

    const [newTask, setNewTask] = useState('')

    const [flag, setFlag] = useState(false)

    const [currentIndex, setCurrentIndex] = useState('')

    const [all, setAll] = useState(false)

    const onDelete = (currentIndex) => {
        for (let i = 0; i < Tasks.length; i++) {
            if (Tasks[i].id === currentIndex) {
                console.log(Tasks[i], "Must be deleted")
                setTasks(Tasks.filter(task => task.id !== currentIndex))
            }
        }
    }

    const buttonClick = (e) => {
        if (newTask.length <= 0) {
            console.log("empty string")
        }
        else {
            const latestId = Tasks.length;
            console.log(latestId)

            setTasks(Tasks.concat({ id: latestId + 1, title: newTask, status: "false" }))
            console.log("pushed");
            console.log(Tasks)
        }
    }

    const onRadioClick = (index) => {
        console.log(index, "must be checked");
        setTasks(prev => prev.map(task => task.id === index ? { ...task, status: !task.status } : task))
    }

    const showAll = () => {
        if (all) {
            console.log("all is true")
            setAll(false);
        }
        else {
            console.log("all is false")
            setAll(true)
        }
    }

    return (
        <>
            <h2 className='text-center'>My tasks</h2>
            <div className="container d-flex align-items-center justify-content-center flex-column gap-3 pt-5">
                <form className="row g-3">
                    <div className="col-auto">
                        <label htmlFor="task" className="visually-hidden">Task</label>
                        <input type="text" className="form-control" id="title" placeholder="New task" name="title" onChange={(e) => { setNewTask(e.target.value) }} />
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary mb-3" onClick={buttonClick}>Add task</button>
                    </div>
                </form>
                <div className='container d-flex flex-start align-items-center justify-content-center gap-2'>
                    <button className='btn btn-primary' >All</button>
                    <button className='btn btn-primary' onClick={showAll}>Active</button>
                    <button className='btn btn-primary'>Done</button>
                </div>
                <div>
                    {
                        
                        Tasks.map((element) => {
                            return <Task Tasks={element} key={element.id} onDelete={onDelete} onRadioClick={onRadioClick} flag={flag} all={all} />
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