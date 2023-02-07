import React from 'react'
import './signUp.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function SignUp() {


    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        alert('passwords do not match');
        return;
      }
  
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('Cannot create user, email already in use');
        } else {
          console.log('user creation encountered an error', error);
        }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  



  return (
    <div className="Sign_up">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Username</label>
          <div>
            <input required onChange={handleChange} type="text"   name='displayName' value={displayName} />
          </div>
        </div>
        <div className="field">
          <label>Email</label>
          <div>
            <input required onChange={handleChange} type="email"  name='email'
          value={email}/>
          </div>
        </div>
        <div className="field">
          <label>Password</label>
          <div>
            <input required onChange={handleChange} type="password" name='password'
          value={password}/>
          </div>
        </div>
        <div className="field">
          <label>Confirm password</label>
          <div>
            <input required onChange={handleChange} type="password" name='confirmPassword'
          value={confirmPassword}/>
          </div>
        </div>
        <div className="btn">
          <button>Submit</button>
        </div>
        <div className="txt">
          You already have account then <Link to="../sign-in">Sign in</Link>
        </div>
      </form>
    </div>
  )
}
