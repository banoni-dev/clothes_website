import React from 'react'
import './signUp.css'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='Sign_up'>
        <form>
            <div className="field">
                <label>Username</label>
                <div><input type="username" /></div>
            </div>
            <div className="field">
                <label>Email</label>
                <div><input type="email" /></div>
            </div>
            <div className="field">
                <label>Password</label>
                <div><input type="password" /></div>
            </div>
            <div className="btn">
                <button>Submit</button>
            </div>
            <div className="txt">You already have account then <Link to="../sign-in">Sign in</Link></div>
        </form>
    </div>
  )
}
