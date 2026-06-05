import React, { useState } from 'react'

const About = (props) => {
    return (
        <>
            <div className='min-vh-100' style={{ backgroundColor: props.textFormColor }} >
                <div className="container">
                    <h1 style={{ color: props.textColor }}>About Us</h1>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                    <strong>   What is TextKit?</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body" >
                                    TextKit is a free, fast, and simple text utility tool built for writers,
                                    developers, and students. Whether you need to convert case, count words,
                                    remove extra spaces, or format text — TextKit does it all in one place
                                    with zero installation required.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                                    <strong>What can TextKit do?</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body }" >
                                    TextKit offers a range of powerful text utilities including:
                                    <p></p>
                                    <p> - UPPERCASE / lowercase / Title Case conversion</p>
                                    <p> - Word and character counter</p>
                                    <p> - Remove extra spaces and line breaks</p>
                                    <p> - Copy text to clipboard instantly</p>
                                    <p> - Preview text in real time as you type</p>
                                    <p> - Multiple themes — Dark, Light, Red, and Blue</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                                    <strong> Who is it for?</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body" >
                                    TextKit is built for everyone — students who need quick formatting,
                                    developers who work with strings, content writers who need word counts,
                                    and anyone who deals with text daily. It's lightweight, ad-free, and
                                    works right in your browser.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About
