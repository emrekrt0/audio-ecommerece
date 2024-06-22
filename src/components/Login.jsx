import React from 'react'
import { useState, useContext } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { langContext } from '../App'
import supabase from './smallComp/Supabase'

export default function Login() {
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target).entries())
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        })
        if (error) {
            alert(error.message)
        } else {
            navigate('/home')
        }
    }
    
    
    return(
    <>
        <div className="loginWrapper">
            <div className="loginContainer">
                <div className="loginContent">
                    <h6 className="mH6">LOGIN</h6>
                    <div className="loginForm">
                        <form onSubmit={handleSubmit}>
                        <div className="loginFormItems">
                            <input type="email" id="email" placeholder="alexei@mail.com" name="email" required />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="loginFormItems">
                            <input type="password" id="password" name="password" placeholder="Password" required />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="loginFormItems">
                            <button className="smallCardsButtonM">LOGIN</button>
                        </div>
                        </form>
                    </div>
                    <div className="loginFooter">
                        <p className="mBody tal">Don't have an account? <Link to="/register" className='txtOrange'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}