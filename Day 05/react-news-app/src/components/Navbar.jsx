import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = (props) => {
    const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <div  >
            <nav className="navbar navbar-expand-lg fixed-top " style={{ backgroundColor: props.Mode === 'dark' ? '#070c18' : '#dce8f5', paddingTop: '1rem', paddingBottom: '1rem' }}>
                <div className="container-fluid " style={{ backgroundColor: props.Mode === 'dark' ? '#070c18' : '#dce8f5' }}>
                    <Link className="navbar-brand" to="/" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }} >NewsLetter</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item" >
                                <Link className="nav-link" aria-current="page" to="/" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="business"
                                    style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="entertainment"
                                    style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="health"
                                    style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="science"
                                    style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="sports"
                                    style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="technology"
                                    style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="form-check form-switch">
                                <input className="form-check-input nav-item" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode} />
                                <label className="form-check-label" htmlFor="switchCheckDefault" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>{props.Mode === 'dark' ? capitalize('light') : capitalize('dark')} Mode</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav >
        </div >
    )
}
export default Navbar;
