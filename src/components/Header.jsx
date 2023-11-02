import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
    { pathname: "/", name: "Home" },
    { pathname: "/about", name: "About" },
    { pathname: "/resume", name: "Resume" },
    { pathname: "/portfolio", name: "Portfolio" },
    { pathname: "/contact", name: "Contact" }
]

const Header = () => {
    const location = useLocation();
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false)

    const onOpenMenu = () => {
        navRef.current.classList.add("navbar-mobile")
        setIsOpen(true)
    }

    const onCloseMenu = () => {
        navRef.current.classList.remove("navbar-mobile")
        setIsOpen(false)
    }

    useEffect(() => {
       onCloseMenu()
    }, [location])

    return (
        <header id="header" className="fixed-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                <h1 className="logo me-auto me-lg-0" style={{ fontFamily: "cursive" }}><Link to="/">Rahul Rai</Link></h1>

                {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

                <nav id="navbar" ref={navRef} className="navbar order-last order-lg-0">
                    <ul>
                        {
                            links.map((link, key) => (
                                <li key={key}><Link to={link.pathname} className={`${(link.pathname === location.pathname) ? 'active' : ""}`}>{link.name}</Link></li>
                            ))
                        }
                    </ul>

                    <i 
                        className={`bi mobile-nav-toggle ${isOpen ? "bi-x" : "bi-list"}`} 
                        onClick={isOpen ? onCloseMenu : onOpenMenu}
                    ></i>
                </nav>

                <div className="header-social-links">
                    <Link className="twitter" to="https://twitter.com/onlyrahulrai" target='_blank' relative="route" ><i className="bi bi-twitter"></i></Link>
                    <Link className="facebook" to="https://www.facebook.com/onlyrahulrai" target='_blank' relative="path" ><i className="bi bi-facebook"></i></Link>
                    <Link className="instagram" to="https://www.instagram.com/onlyrahulrai" target='_blank' rel="noopener noreferrer" ><i className="bi bi-instagram"></i></Link>
                    <Link className="linkedin" to="https://www.linkedin.com/in/onlyrahulrai" target='_blank' rel="noopener noreferrer" ><i className="bi bi-linkedin"></i></Link>
                    <Link className="github" to="https://github.com/onlyrahulrai" target='_blank' rel="noopener noreferrer" ><i className="bi bi-github"></i></Link>
                </div>

            </div>

        </header >
    )
}

export default Header