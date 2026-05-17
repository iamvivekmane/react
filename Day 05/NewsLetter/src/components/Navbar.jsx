import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = (props) => {
    const [navbarColor, setNavbarColor] = useState('white')
    const toggleMode = () => {
        if (props.Mode === 'light') {
            props.setMode('dark');
            setNavbarColor('black')
            props.setTextColor('white')
            props.setContentColor('black')
        }
        else {
            props.setMode('light')
            setNavbarColor('white')
            props.setTextColor('black')
            props.setContentColor('white')
        }
        console.log(props.Mode);
    }

    const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <div style={{ backgroundColor: navbarColor }} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className="container-fluid " style={{ backgroundColor: navbarColor }}>
                    <Link className="navbar-brand" to="/" style={{ color: props.textColor }} >NewsLetter</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item" >
                                <Link className="nav-link" aria-current="page" to="/" style={{ color: props.textColor }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="business"
                                    style={{ color: props.textColor }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="entertainment"
                                    style={{ color: props.textColor }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="health"
                                    style={{ color: props.textColor }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="science"
                                    style={{ color: props.textColor }}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="sports"
                                    style={{ color: props.textColor }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="technology"
                                    style={{ color: props.textColor }}>Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="form-check form-switch">
                                <input className="form-check-input nav-item" type="checkbox" role="switch" id="switchCheckDefault" onClick={toggleMode} />
                                <label className="form-check-label" htmlFor="switchCheckDefault" style={{ color: props.textColor }}>{capitalize(props.Mode)} Mode</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div >
    )
}
export default Navbar;
