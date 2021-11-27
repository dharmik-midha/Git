import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navabar = (props) => {

    const Menu = () => {
        return (
            <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/singleuser">Single User</Link></li>
                <li><Link to="/about">About</Link></li>
            </>
        )
    }

    return (
        <div className="Nav">
            <li><img src='https://image.flaticon.com/icons/png/512/25/25231.png' alt="img" /><span>{props.title}</span></li>
            <ul className='listt '>
                <Menu />
            </ul>
            <div className="dropdownmenu">
                <li className='icon'>📃</li>
                <div className="res-content">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Navabar