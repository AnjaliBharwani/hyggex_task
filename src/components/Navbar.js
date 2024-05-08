import React from 'react'
import logo from "./asset/logo.png";
import login from "./asset/Frame 1.png"


function Navbar() {
    return (
        <nav className="navbar flex justify-between  pt-10 pl-20 pr-20" >
          <a href='#'>
            <img src={logo}></img>
          </a>

          <ul className="nav-links flex gap-12  text-xl">
            <li><a href="#">Home</a></li>
            <li><a href="#">Flashcard</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href='#'>
            <img src={login}></img>
          </a></li>
          </ul>
        </nav>
      );
}

export default Navbar