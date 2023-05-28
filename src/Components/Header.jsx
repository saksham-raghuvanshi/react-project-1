import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <Link to={"/"} ><h1>Frontend Gyaan</h1> </Link>
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact-us"}>Contact</Link>
            <Link to={"/about-us"}>About</Link>
            <Link to={"/brands"}>Brands</Link>
            <Link to={"/services"}>Services</Link>

        </main>
    </nav>
  )
}

export default Header

