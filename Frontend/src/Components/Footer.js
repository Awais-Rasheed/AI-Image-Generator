import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
        <div className='footer'>
            <div className="logo">
                <h2>Video<br></br>Generator</h2>
                <img src='/img/shape.svg' alt='Logo'/>
            </div>

            <div className="nav-link">
                <ul className=''>
                    <li className='footer-nav nav'><a href="/">Home</a></li>
                    <li className='footer-nav nav'><a href="/about">About</a></li>
                    <li className='footer-nav nav'><a href="/contact">Contact</a></li>
                    <li className='footer-nav nav'><a href="/login">Login</a></li>
                    <li className='footer-nav nav'><a href="/register">Register</a></li>
                </ul>
            </div>

            <div className="social_links">

            </div>
        </div>
    </>
  )
}
