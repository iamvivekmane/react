import React, { useContext, useEffect, useEffectEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
                <h1 className='text-ceter'>TheNotebook - Your notes always in sync</h1>
            </div>
            <div className='py-5'>
                <span className='text-justify'>Create, edit, and organize your notes the moment an idea strikes. Search through everything you've ever written in seconds, and pick up right where you left off on your laptop, phone, or tablet. Every note is encrypted in transit and at rest, and stays tied only to your account.</span>
            </div>
            <div className="buttons d-flex flex-row gap-2">
                <Link className="btn btn-primary mx-1" type="submit" to="/Login">Login</Link>
                <Link className="btn btn-primary mx-1" type="submit" to="/Signup">Signup</Link>
            </div>
        </div>
    )
}

export default Landing