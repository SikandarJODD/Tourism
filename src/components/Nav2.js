import React, { useState } from 'react'
import '../Nav.css'
import logo from '../code.png'

export default function Nav2() {
    const [myStyle, setmyStyle] = useState({
        color: '#0d69f3',

    })
    const [myStyl, setBg] = useState({
        backGroundColor: '#ffffff',
    })
    const [myColo, setmyColo] = useState({

        color: 'rgb(23, 247, 247)',
    })
    const [btnText, setText] = useState("Dark");
    const [myCol, setmyCol] = useState({
        color: 'black',
    })
    const [myNav, setmyNav] = useState({
        color: '#1475f5',
    })
    let MergeAuto = () => {
        if (myStyle.color == '#0d69f3') {
            setmyStyle({
                color: '#1cc9f5',
                backgroundColor: '#232323',
                transition: 'all 0.3s ease 0s',
            })
            setBg({
                backgroundColor: '#232323',
            })
            setText("Light")
            setmyNav({
                backgroundColor: '#232323',
                color: '#1cc9f5',
            })
            
            setmyColo({
                backgroundColor: '#232323',
                color: '#1cc9f5',
            })
            setmyCol({
                backgroundColor: '#232323',
                color: '#1cc9f5',

            })
        }
        else {
            setmyNav({
                backgroundColor: 'white',
                color: '#1475f5',
            })
            setmyColo({
                backgroundColor: 'rgba(0,136,169,1)',
                color: 'rgb(23, 247, 247)',
            })
            setmyStyle({
                color: '#0d69f3',
                transition: 'all 0.4s ease 0s',
            })
            setBg({
                backgroundColor: '#ffffff',
            })
            setText("Dark");
            setmyCol({
                backgroundColor: 'rgba(0,136,169,1)',
                color: ''
            })
        }

    }
    return (
        <>

            <div style={myStyl}>
                <header style={myStyl} >
                    <div className='head-1' style={myStyle}>
                        <img className='logo' src={logo} alt="logo" style={myStyle} />
                        <a href="/" className='Med' style={myNav}>CodeZ</a>
                    </div>
                    <nav style={myStyle}>
                        <ul className='nav_link' style={myStyle}>
                            <li style={myStyle}><a href="/" style={myStyle}>Home</a></li>
                            <li style={myStyle}><a href="/" style={myStyle}>Serviecs</a></li>
                            <li style={myStyle}><a href="/" style={myStyle}>Product</a></li>
                        </ul>
                    </nav>
                    <a className='cta' href="/" style={myStyle}><button style={myColo}>Contact</button></a>
                </header>
                <button onClick={MergeAuto} className='ctb' style={myCol}>{btnText}</button>
            </div>
        </>
    )
}
