import React, { useContext, useEffect, useEffectEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    // let location = useLocation()
    // useEffect is for demonstration 
    // useEffect(() => {
    //     console.log(location.pathname)
    // }, [location]);
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log("called")
        localStorage.removeItem('token');
        navigate("/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">TheNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/Home' ? "active" : ""}`} aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/About' ? "active" : ""}`} to="/About">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className='d-flex'>
                            <Link className="btn btn-primary mx-1" type="submit" to="/Login">Login</Link>
                            <Link className="btn btn-primary mx-1" type="submit" to="/Signup">Signup</Link>
                        </form> : <button className="btn btn-primary mx-1" type="submit" onClick={handleLogout} >Logout</button>}

                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;