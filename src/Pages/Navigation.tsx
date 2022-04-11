import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
  return (
    
    <nav>
        <h3>NavBar</h3>
        <ul>
        <li><Link to="/" >Home</Link></li>
            <li><Link to="/contactlist" >Contact List</Link></li>
            <li><Link to="/favourites" >Favourites</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation