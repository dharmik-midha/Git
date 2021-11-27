import React,{useState} from 'react'

const Search = (props) => {
    const[info,setinfo]=useState({
        text:'',
        alert:false,
    })
    const onChange=(e)=>{   
        e.preventDefault();
        setinfo({[e.target.name]:e.target.value}); 
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        if(info.text==='')
        { 
            setinfo({alert:true ,text:''});
            setTimeout(()=>{setinfo({alert:false,text:''})},2000);
        }
        else{
         props.searchUser(info.text);
         setinfo({text:''});
        }    
    }
    return (
        <form action="#" className="inputBox" method="post" onSubmit={onSubmit}>
            {info.alert?<div className='alert'><b>Please Enter Some Text</b></div>:null}
            <input type="text" name="text" placeholder="Search GitHub Id" value={info.text} id="search" onChange={onChange}/>
            <button type="submit" id="submit">🔍</button>
            {props.showClear?<button type="reset" id="submit" onClick={props.clearUsers}>❌</button>:null}
        </form>
    )
}

export default Search
