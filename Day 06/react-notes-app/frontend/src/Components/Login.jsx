import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const host = import.meta.env.VITE_API_URL

    const handleSubmit = async (e) => {
        // It prevents the page from reloading
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            props.showAlert("success", "logged in successfully")
            navigate("/home")
        }
        else {
            props.showAlert("danger", "invalid credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="heading d-flex justify-content-center align-items-center ">
                    <h1 className='center'>Login</h1>
                </div>
                <div className="main d-flex align-items-center justify-content-center flex-column">
                    <div className="mb-3 d-flex w-50 justify-content-center align-itms-center flex-column " >
                        <label htmlFor="email" className="form-label text-start">Email</label>
                        <input type="email" className="form-control w-100" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    </div>
                    <div className="mb-3 d-flex w-50 justify-content-center align-itms-center flex-column " >
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control w-100" id="password" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary w-50 max-sm:w-100" >Login</button>
                    <Link type="button" className="btn border  w-50 m-2" to="/Signup" >Signup</Link>
                </div>
            </form >
        </>
    )
}

export default Login