import React, { useEffect, useState } from 'react'
import Task from './Task'
import Done from './Done'
import Active from './Active'

const Hero = () => {

    const [Tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('Tasks')
        return saved ? JSON.parse(saved) : [];
    })

    const [newTask, setNewTask] = useState('')

    const [flag, setFlag] = useState('all')

    const [currentIndex, setCurrentIndex] = useState()

    const deleteTask = (currentIndex) => {
        for (let i = 0; i < Tasks.length; i++) {
            if (Tasks[i].id === currentIndex) {
                console.log(Tasks[i], "Must be deleted")
                setTasks(Tasks.filter(task => task.id !== currentIndex))
            }
        }
    }

    const addTask = (e) => {
        if (newTask.length <= 0) {
            alert("Empty string")
        }
        else {
            const latestId = Tasks.length;
            console.log(latestId)
            setTasks(Tasks.concat({ id: latestId + 1, title: newTask, status: false }))
            console.log("Localstorage" + localStorage.getItem('Tasks'))
            setFlag('all')
        }
    }

    const checkTask = (index) => {
        console.log(index, "must be checked");
        setTasks(Tasks => Tasks.map(task => task.id === index ? { ...task, status: !task.status } : task))
        console.log(Tasks)
    }


    const toggleMode = (flag) => {
        setFlag(flag)
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTask();
    }

    useEffect(() => {
        localStorage.setItem('Tasks', JSON.stringify(Tasks))
    }, [Tasks])

    return (
        <>
            <h1 className='text-center'>To-Do List</h1>
            <div className="container d-flex align-items-center justify-content-center flex-column gap-3 pt-3">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-auto">
                        <label htmlFor="task" className="visually-hidden">Task</label>
                        <input type="text" className="form-control" id="title" placeholder="New task" name="title" onChange={(e) => { setNewTask(e.target.value) }} />
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary mb-3" onClick={addTask}>Add task</button>
                    </div>
                </form>
                <div className='container d-flex flex-start align-items-center justify-content-center gap-2'>
                    <button className='btn btn-primary' onClick={() => { toggle('all') }}>All</button>
                    <button className='btn btn-info' onClick={() => { toggle('active') }}>Active</button>
                    <button className='btn btn-success' onClick={() => { toggle('done') }}>Done</button>
                </div>
                <div className='mt-0 pt-0'>
                    {
                        Tasks.map((element) => {
                            if (flag === 'all') {
                                return <Task Tasks={element} key={element.id} deleteTask={deleteTask} checkTask={checkTask} flag={flag} />
                            } else if (flag === 'active') {
                                return <Active Tasks={element} key={element.id} deleteTask={deleteTask} checkTask={checkTask} flag={flag} />
                            }
                            else if (flag === 'done') {
                                return <Done Tasks={element} key={element.id} deleteTask={deleteTask} checkTask={checkTask} flag={flag} />
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Hero