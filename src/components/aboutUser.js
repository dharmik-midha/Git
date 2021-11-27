import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../App.css'

const AboutUser = (props) => {
  const [user, setUser] = useState();
  const getuser = async () => {
    const res = await axios.get(`https://api.github.com/users/${props.match.params.user}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    if (res.status === 200) {
      setUser(res.data);
    }

  };
  if (user === undefined) { getuser(); }
  else {
    const { name,company,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists } = user;

    return (
      <>
        <div className="contaie">
          <div className="aboutuser">
            <div className='card grid-2'>
              <div className='all-center'>
                <img
                  src={avatar_url}
                  className='round-img'
                  alt=''
                  style={{ width: '150px' }}
                />
                <h1>{name}</h1>
                <p>Location: {location}</p>
              </div>
              <div>
                {bio && (
                  <>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </>
                )}
                <a href={html_url} className='btn btn-dark my-1'>
                  Visit Github Profile
                </a>
                <ul>
                  <li>
                    {login && (
                      <>
                        <strong>Username: </strong> {login}
                      </>
                    )}
                  </li>
                  <li>
                    {company && (
                      <>
                        <strong>Company: </strong> {company}
                      </>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <>
                        <strong>Website: </strong> {blog}
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className='card text-center'>
              <div className='badge badge-primary'><span>Followers:</span> {followers} </div>
              <div className='badge badge-success'><span>Following: </span>{following} </div>
              <div className='badge badge-light'><span>Public Repos:</span> {public_repos} </div>
              <div className='badge badge-dark'><span>Public Gists: </span>{public_gists} </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (<></>)
}


export default AboutUser










