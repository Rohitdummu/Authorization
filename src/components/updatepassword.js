import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Upwd=()=>{
    const [updatedPassword,setPassword]=useState("")
    const [message,setMessage]=useState("")
    const [flag,setFlag]=useState(true)
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setPassword(e.target.value)
    }
    const updatepassword=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3007/updatepwd",{"upassword":updatedPassword},{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{setMessage(res.data.msg)
        setFlag(res.data.status)}).catch((err)=>console.log(err))
    }
    return(
        <div>
        <h1>Update Password</h1>
        Enter your new password:<input type="text" onChange={(e)=>handleChange(e)}></input>
        <button onClick={(e)=>updatepassword(e)}>update</button>
        {
            flag?<h1>{message}</h1>:navigate("/")
        }
        </div>

    )
    
}
export default Upwd