import React,{useState} from 'react'
import Search from './Search'
// import axios from 'axios'
import Profile from './Profile'
const SingleUser = () => {
    const [state, setState] = useState("");
    const[show,setShow]=useState(false);

    const searchUser=async(text)=>{
        // const res=await axios.get(`http://api.github.com/users/${text}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
        // setState(res.data)

        
        fetch(`http://api.github.com/users/${text}?client_id=f4f1e852091ad55c4308&client_secret=d101224d6422a1394dd459778a6e67c77a7f9829`)
        .then(response=>response.json())
        .then(getdata=>setState(getdata))
        .catch(err=>console.log(err))
        setShow(true)
    }
    const clearUsers=()=>{setState("");setShow(false)}
    
    return (
        <>
            <Search searchUser={searchUser} clearUsers={clearUsers} showClear={show?true:false}/>
             <div className="card">
            {show?<Profile info={state}/>:null}
           </div>
        </>
    )
}

export default SingleUser
