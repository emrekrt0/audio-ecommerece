import React from 'react'
import { useState, useContext, useRef } from 'react'
import { Form, Link } from 'react-router-dom'
import { langContext } from '../App'
import supabase from './smallComp/Supabase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({email: '', password: ''})
    const navigate = useNavigate()
    
    async function handleSubmit(e) {
        e.preventDefault()
        const userMetadata = Object.fromEntries(new FormData(e.target).entries())
        const userData = {...formData, ...userMetadata}

        const { data, error } = await supabase.auth.signUp(
            {
            email: userData.email,
            password: userData.password,
            options: {
                data: {
                first_name: userData.name,
                age: userData.age,
                }
            }
            }
        )
        if (error) {
            alert(error.message)
        } else {
            navigate('/login')
        }
    }
    
    async function handleChange() {
        if (currentStep === 2) {
            setCurrentStep(currentStep - 1)
        }
    }
    async function handleInputChange(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    async function collectData(e) {
        e.preventDefault()
        const emailData = Object.fromEntries(new FormData(e.target).entries())
        setFormData(emailData)
        setCurrentStep(currentStep + 1)
    }
    
    return(
    <>
        {currentStep === 1 && (
        <div className="loginWrapper">
            <div className="loginContainer">
                <div className="loginContent">
                    <h6 className="mH6">REGISTER</h6>
                    <div className="loginForm">
                        <form onSubmit={collectData}>
                        <div className="loginFormItems">
                            <input type="email" id="email" placeholder="alexei@mail.com" name="email" value={formData.email} onChange={handleInputChange} required />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="loginFormItems">
                            <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="loginFormItems">
                            <button className="smallCardsButtonM" type='submit'>NEXT</button>
                        </div>
                        </form>
                    </div>
                    <div className="loginFooter">
                        <p className="mBody tal">Do you have an account? <Link to="/login" className='txtOrange'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
        )}
        {currentStep === 2 && (
            <div className="loginWrapper">
            <div className="loginContainer">
                <div className="loginContent">
                    <h6 className="mH6">REGISTER</h6>
                    <div className="loginForm">
                        <form onSubmit={handleSubmit}>
                        <div className="loginFormItems">
                            <input type="name" id="name" placeholder="Alex" name="name" required />
                            <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="loginFormItems">
                            <input type="age" id="age" name="age" placeholder="25" required />
                            <label htmlFor="age">Age</label>
                        </div>
                        <div className="loginFormItems">
                            <button className="smallCardsButtonM" onClick={handleChange}>PREVIOUS</button>
                            <button className="smallCardsButtonM" type='submit'>REGISTER</button>
                        </div>
                        </form>
                    </div>
                    <div className="loginFooter">
                        <p className="mBody tal">Do you have an account? <Link to="/login" className='txtOrange'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
    )
}