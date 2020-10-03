import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // sign in with firebase
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push("/")
                }
            })
    }

    const register = e => {
        e.preventDefault();
        // firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // it creates a new user with email and password
                // console.log(auth);
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Enter your email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </form>

                <form>
                    <h5>Enter your password</h5>
                    <input type="password" value={password} onChange={p => setPassword(p.target.value)} />
                </form>

                <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                <p>By continuing, you agree to Amazon Fake Clone's Conditions of Use and Privacy Notice.</p>
                <h5>New to Amazon?</h5>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
