import React from 'react'
import './Profile.css'
const Profile = ({info}) => {
    return (
        <>
        <div className="profile">
         <ul>
             <li><img src={info.avatar_url} alt=' '/><span className="image-span">{info.login}</span></li>
             <li><h1>{info.followers}</h1> <span>Followers</span></li>
             <li><h1>{info.following}</h1> <span>Following</span></li>
        </ul> 
        <ul>
            <li className="image-span"><h3>{info.id}</h3><span>ID</span></li> 
            <li><h3>{info.public_repos}</h3><span>Public-Repos</span></li> 
            <li><h3>{info.public_gists}</h3><span>Public-Gists </span></li> 
        </ul>
       
        <h3>Created At {info.created_at}</h3>        
        </div>
   
      </>
    )
}

export default Profile
