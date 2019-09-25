import React from 'react'
import logo from '../../img/logo.png'
import Navbar from './Navbar'
import './Header.css'


const Header = () => {
    return (
        <div className="container">
            <header className="header__container bg-light">
                <div className="header__logo">
                    <img src={logo} alt=""/>
                </div>

                <nav className="header__nav">
                    <Navbar/>
                </nav>
            </header>
        </div>
    )
}

export default Header
