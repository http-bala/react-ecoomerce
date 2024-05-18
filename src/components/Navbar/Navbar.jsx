import React, {useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [Menu, setMenu] = useState("shop")
    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}> <Link to="/">Shop</Link>{Menu === "shop" ? <hr/> : <></>} </li>
                <li onClick={()=>{setMenu("men")}}>  <Link to="/mens">Men's</Link>  {Menu === "men" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("women")}}>  <Link to="/womens">Women's </Link> {Menu === "women" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("kids")}}>  <Link to="/kids">Kid's </Link> {Menu === "kids" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" srcset="" /></Link>
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </nav>
    )
}

export default Navbar