import React from 'react'
import "./CSS/navabar.css"
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
    <ul>
  <li><NavLink   to="/">Home</NavLink></li>
  
  <li><NavLink   to="/cart">Cart</NavLink></li>
  <li><NavLink   to="/orders">Orders</NavLink></li>

  
  </ul> 
    </div>
  )
}

export default Navbar