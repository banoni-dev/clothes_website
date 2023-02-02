import React from 'react'
import './header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
      </div>
      <div className="links">
            <Link to="shop">Shop</Link>
            <Link to="cathegories">Cathegories</Link>
            <Link to='contact'>Contact</Link>
            <Link to="sign-in">Sign in</Link>
            <Link to="cart">Cart</Link>
      </div>
    </div>
  )
}
