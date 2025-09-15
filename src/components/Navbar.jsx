import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
<a href="/home" >Home</a>
  <a href="/supermarket" >Supermarket</a>
  <a href="/combo">Combo</a>
  <a href="/shop" >Shop</a>
  <a href="/store">Store</a>
  <a href="/sell">Sell</a>
</div>
</nav>
</>
  )
}

export default Navbar
