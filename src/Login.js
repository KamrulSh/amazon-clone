import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Enter your email</h5>
                    <input type="text"></input>
                </form>

                <form>
                    <h5>Enter your password</h5>
                    <input type="password"></input>
                </form>

                <button className="login__signInButton">Sign In</button>
                <p>By continuing, you agree to Amazon Fake Clone's Conditions of Use and Privacy Notice.</p>
                <h5>New to Amazon?</h5>
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
