import React from 'react'
import './signIn.css'
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='sign_in'>
        <form>
            <div className="field">
                <label>Email</label>
                <div><input type="email" /></div>
            </div>
            <div className="field">
                <label>Password</label>
                <div><input type="password" /></div>
            </div>
            <div className="btn">
                <button>Sign in</button>
            </div>
            <div className="txt">You dont have an account then <Link to="../sign-up">Sign up</Link></div>
        </form>
    </div>
  )
}
