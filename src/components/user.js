import React  from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const User = (props) => {
    const {Data}=props
    return (
        <>
            <h1 style={{textAlign:"center",display:'block'}}>USERS PROFILE</h1>
        <div className='users'>
            {
                Data.map(d=>
                <ul className='data'  key={d.id}>
                <li><img src={d.avatar_url} alt="" /> </li>
                <li >{d.login.toUpperCase()}</li>
                <li className='more'><Link to={`/aboutuser/${d.login}`} >More</Link></li>
                </ul>
                )
            }
        </div>
        </>
    )
}

export default User
