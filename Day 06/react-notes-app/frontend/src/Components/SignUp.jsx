import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // It prevents the page from reloading
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/login")
        }
        else {
            alert("Invalid credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3" >
                <label htmlFor="name" className="form-label">Name</label>
                <input type="name" className="form-control" id="name" name="name" aria-describedby="emailHelp" value={credentials.name} onChange={onChange} required />
            </div>
            <div className="mb-3" >
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChange} required minLength={5} />
            </div>

            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm password</label>
                <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required minLength={5} />
            </div>
            <button type="submit" className="btn btn-primary">Signup</button>
        </form >
    )
}

export default Signup