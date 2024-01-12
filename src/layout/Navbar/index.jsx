import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

function Navbar() {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="head">
          <div className="left"><NavLink to={"/"}>Nitro</NavLink></div>
          <div className="right">
            <ul className='pages'>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink>About Us</NavLink></li>
              <li><NavLink>Portfolio</NavLink></li>
              <li><NavLink>Services</NavLink></li>
              <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
              <li><NavLink>Blog</NavLink></li>
              <li><NavLink to={"/AddPages"}>Add Pages</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
        <div className="main">
            <div className="welcome">WELCOME</div>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
            <button className='btn'>Get in Touch</button>
        </div>
    </div>
  )
}

export default Navbar