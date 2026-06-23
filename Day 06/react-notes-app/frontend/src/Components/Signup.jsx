import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate();
    const host = import.meta.env.VITE_API_URL

    const handleSubmit = async (e) => {
        // It prevents the page from reloading
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        if (json.success) {
            // save the auth token and redirect
            props.showAlert("success", "Account created successfully")
            localStorage.setItem('token', json.authtoken)
            navigate("/login")
        }
        else {
            props.showAlert("danger", "Invalid credentials")
        }
    }
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (

        <form onSubmit={handleSubmit} >
            <div className="heading d-flex justify-content-center align-items-center flex-column">
                <h1 className='center'>Signup</h1>
            </div>
            <div className="main d-flex align-items-center justify-content-center flex-column">

                <div className="mb-3 d-flex w-50 justify-content-center align-itms-center flex-column " >
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" name="name" aria-describedby="emailHelp" value={credentials.name} onChange={onChange} required />
                </div>
                <div className="mb-3 d-flex w-50 justify-content-center align-itms-center flex-column " >
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required />
                </div>
                <div className="mb-3 d-flex w-50 justify-content-center align-itms-center flex-column " >
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required minLength={5} />
                </div>
                <div className="mb-3 d-flex w-50 justify-content-center align-itms-center flex-column " >
                    <label htmlFor="cpassword" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required minLength={5} />
                </div>
                <button type="submit" className="btn btn-primary w-50">Signup</button>
            </div>
        </form >
    )
}

export default Signup
