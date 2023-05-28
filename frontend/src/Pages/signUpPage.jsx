import axios from "axios";
import { useState } from "react";

export default function SignUpPage(){
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
        .then(res=>alert(res.msg))
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={submitForm}>
  <label>Name</label>
  <input required onChange={(e)=>setName(e.target.value)} />

  <label>Email</label>
  <input required onChange={(e)=>setEmail(e.target.value)} />

  <label>Password</label>
  <input required onChange={(e)=>setPassword(e.target.value)} />

  <input type="submit" value="submit" />
</form>
        </div>
    )
}