import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    
    const location = useLocation();
    console.log("location",location.pathname)
    
    return (
        <header id="header" className="header d-flex align-items-center light-background sticky-top">
            <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename">Vishwas</h1>
                </Link>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="/" className={`${location.pathname === "/" ? "active" :""}`}>Home</Link></li>
                        <li><Link to="/about" className={`${location.pathname === "/about" ? "active" :""}`}>About</Link></li>
                        <li><Link to="/resume" className={`${location.pathname === "/resume" ? "active" :""}`}>Resume</Link></li>
                        <li><Link to="/services" className={`${location.pathname === "/services" ? "active" :""}`}>Services</Link></li>
                        {/* <li><a href="portfolio.html">Portfolio</a></li>
                        <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li> */}
                        {/* <li><a href="contact.html">Contact</a></li> */}
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                </nav>
                <div className="header-social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
                    <a href="https://www.facebook.com/share/16DhnEHSL6/" 
                     target='_blank' className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="https://www.instagram.com/st.ranger5791?igsh=a3hnbnJod3J4Z3Zn" 
                        target='_blank' className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="https://www.linkedin.com/in/vishwas-kuldeep-b0a537265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>
            </div>
        </header>

    )
}

export default Header