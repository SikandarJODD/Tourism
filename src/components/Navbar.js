import React from 'react'
import '../App.css'

export default function Navbar(props) {
    return (
        <>
            <header>
                <nav className='navbar'>
                    {/* <div className='main-head'>
                        <a href="/">Title</a>
                    </div> */}
                    <ul>
                        <li ><a href="/">Home</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
