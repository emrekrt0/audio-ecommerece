import React from 'react'
import { useState, useContext } from 'react'
import { Form, Link } from 'react-router-dom'
import { langContext } from '../App'

export default function Login() {

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target).entries())
        console.log(formData, 'form data');
    }
    
    
    return(
    <>
        <div className="loginWrapper">
            <div className="loginContainer">
                <div className="loginContent">
                    <h4 className="mH4 ls-1">Register</h4>
                    <div className="loginForm">
                        <form onSubmit={handleSubmit}>
                        <div className="loginFormItems">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="loginFormItems">
                            <input type="password" id="password" name="password" placeholder="Password" required />
                        </div>
                        <div className="loginFormItems">
                            <button className="btn btnOrange">Register</button>
                        </div>
                        </form>
                    </div>
                    <div className="loginFooter">
                        <p className="mBody tal">Do you have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}