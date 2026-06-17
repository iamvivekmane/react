import React, { useContext, useEffect, useEffectEvent } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <h1>About</h1>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Why TheNotebook ?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Most note apps either do too little or get in your way with clutter. TheNotebook is built around one idea: writing something down should take seconds, and finding it again later should be just as easy. No unnecessary steps, no bloated interface — just your notes, ready when you need them.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> What you can do ?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Create, edit, and organize notes instantly, search through everything you've written in seconds, and access your notebook securely from any device with your account. Your notes stay private and tied only to you.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Who it's for ? </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Students keeping track of lectures and assignments, professionals jotting down meeting notes and to-dos, writers capturing ideas before they slip away, or anyone who just wants a clean place to think out loud.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About