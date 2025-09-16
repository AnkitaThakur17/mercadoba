import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<>
<nav className='navbar'>
    <img src = "/logo.webp"></img>
    <input className='input' type='text' placeholder=' 🔍 Search for products...'></input>
<div className='right-items'>
    <img className="img"src ="/fire.webp"></img>
    <h4>CyberLunes Hasta 55% OFF</h4>
    <img className='img'src='/discount.webp'></img>
    <button className='custom'> <FontAwesomeIcon icon={faUser} color="white" size="lg" /></button>
    <button className='custom2'></button>
    <p>English</p>
</div>
</nav>
<nav className='nav2'>
<div className='nav-link'>
<Link to="/home" >Home</Link>
  <Link to="/supermarket" >Supermarket</Link>
  <Link to="/combo">Combo</Link>
  <Link to ="/shop" >Shop</Link>
  <Link to="/store">Store</Link>
  <Link to="/sell">Sell</Link>
</div>
</nav>
</>
  )
}

export default Navbar
