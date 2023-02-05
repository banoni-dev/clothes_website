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
            <div className="btn">
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Sign up with Google</button>
            </div>






            <div className="txt">You already have account then <Link to="../sign-in">Sign in</Link></div>
        </form>
    </div>
  )
}
