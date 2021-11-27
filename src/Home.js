import React ,{useState,useEffect} from 'react'
import axios from 'axios'

import User from './components/user'
import Search from './components/Search'

const Home = () => {
    const [view,setview]=useState([])//passing the data to Users Component
    useEffect(() => {
        const fetc=async()=>{
            const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
            if (res.status===200){
                setview(res.data)
            }
   
        }
        fetc()
    }, [])

    const searchData=async(text)=>{
    // console.log(text)
      const resp= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
      if (resp.status===200){
        // console.log(resp.data.items)
          setview(resp.data.items)
      }
      else
      {
        console.log("error")
      }
    
      }

    const clearData=()=>{setview([])}
  return (
    <>
      <Search searchUser={searchData} clearUsers={clearData} showClear={view.length>0?true:false}/>
      <User Data={view}/>
    </>
  )
}

export default Home



