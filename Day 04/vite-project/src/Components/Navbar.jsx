import React from 'react'
import PropTypes from 'prop-types'


const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.aboutText}</a>
                        </li>
                    </ul>
                    {/* <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
                        <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</label>
                    </div> */}

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={() => document.body.style.backgroundColor = 'black'} >Black</button>
                        <button type="button" class="btn btn-primary" onClick={() => document.body.style.backgroundColor = 'red'}  >Red</button>
                        <button type="button" class="btn btn-primary" onClick={() => document.body.style.backgroundColor = 'blue'} >Blue</button>
                    </div>
                </div>
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'set text here'
}

export default Navbar