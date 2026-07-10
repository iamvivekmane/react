import React, { useState } from 'react'
import Task from './Task'
import Done from './Done'
import Active from './Active'

const Hero = () => {
    const [Tasks, setTasks] = useState(
        [
            // { id: 0, title: "Make", status: "false" },
            // { id: 1, title: "Take", status: "false" },
            // { id: 3, title: "Take", status: "true" },
            // { id: 4, title: "Take", status: "true" },
            // { id: 5, title: "Take", status: "true" }
        ]
    )

    const [newTask, setNewTask] = useState('')

    const [flag, setFlag] = useState('all')

    const [currentIndex, setCurrentIndex] = useState('')



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

            setTasks(Tasks.concat({ id: latestId + 1, title: newTask, status: false }))
            setFlag('all')
        }
    }

    const onRadioClick = (index) => {
        console.log(index, "must be checked");
        setTasks(Tasks => Tasks.map(task => task.id === index ? { ...task, status: !task.status } : task))
        console.log(Tasks)
    }

    const toggle = (flag) => {
        setFlag(flag)
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
                    <button className='btn btn-primary' onClick={() => { toggle('all') }}>All</button>
                    <button className='btn btn-primary' onClick={() => { toggle('active') }}>Active</button>
                    <button className='btn btn-primary' onClick={() => { toggle('done') }}>Done</button>
                </div>
                <h1>{flag} Tasks</h1>
                <div>
                    {
                        Tasks.map((element) => {
                            if (flag === 'all') {
                                return <Task Tasks={element} key={element.id} onDelete={onDelete} onRadioClick={onRadioClick} flag={flag} />
                            } else if (flag === 'active') {
                                return <Active Tasks={element} key={element.id} onDelete={onDelete} onRadioClick={onRadioClick} flag={flag} />
                            }
                            else if (flag === 'done') {
                                return <Done Tasks={element} key={element.id} onDelete={onDelete} onRadioClick={onRadioClick} flag={flag} />
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Hero