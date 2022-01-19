import React from 'react'
import '../Nav.css'
import logo from '../code.png'

export default function Nav2() {
    return (
        <div>
            <header>
            <div className='head-1'>
                <img className='logo' src={logo} alt="logo" />
                <a href="/" className='Med'>CodeZ</a>
            </div>
                <nav>
                    <ul className='nav_link'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Serviecs</a></li>
                        <li><a href="/">Product</a></li>
                    </ul>
                </nav>
                <a className='cta' href="/"><button>Contact</button></a>

            </header>
        </div>
    )
}
