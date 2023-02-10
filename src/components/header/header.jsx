
import { Fragment, useContext } from 'react';
import './header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

export default function Header() {
  const { currentUser } = useContext(UserContext)
  
  return (
    <Fragment>
      <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
      </div>
      <div className="links">
        <Link to="shop">Shop</Link>
        <Link to="cathegories">Cathegories</Link>
        <Link to="contact">Contact</Link>
        {currentUser ? (
          <a style={{cursor: 'pointer'}} onClick={signOutUser}>
            SIGN OUT
          </a>
        ) : (
          <Link to="/sign-in">
            SIGN IN
          </Link>
        )}
        <Link to="cart">Cart</Link>
      </div>
    </div>
    </Fragment>
  )
}
