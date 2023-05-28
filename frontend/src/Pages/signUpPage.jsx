import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(){
    const navigate = useNavigate();
    const[email,setEmail] = useState();
    const[name,setName] = useState();
    const[password,setPassword] = useState();

    const submitForm = (e)=>{
        e.preventDefault();

        let userData = {
            name : name,
            email : email,
            password : password
        }

        axios.post("https://bookstore-app.cyclic.app/user/reg",userData)
        .then(res=>{
            alert(res.data.msg);
            navigate('/login')
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <div>
  <label>Name</label>
  <input required type="text" onChange={(e)=>setName(e.target.value)} />
  </div>

  <div>
  <label>Email</label>
  <input required type="email" onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div>
  <label>Password</label>
  <input required type="password" onChange={(e)=>setPassword(e.target.value)} />
  </div>
  
  <input type="submit" value="submit" />
</form>

<button onClick={()=>navigate("/login")}>Login</button>
        </div>
    )
}