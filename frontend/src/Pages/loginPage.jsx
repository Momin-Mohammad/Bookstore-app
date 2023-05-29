import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CheckoutPage.module.css";

export default function LoginPage(){
    const navigate = useNavigate();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();

    const submitForm = (e)=>{
        e.preventDefault();

        let userData = {
            email : email,
            password : password
        }

        axios.post("https://bookstore-app.cyclic.app/user/login",userData)
        .then(res=>{
            alert(res.data.msg);
            if(res.data.msg == "Login Successfull"){
                navigate('/')   
            }
            
        })
        .catch(err=>console.log(err));
    }

    return(
        <div className={styles.main_div}>
            <form onSubmit={submitForm}>

<div>
  <label>Email</label>
  <input required type="email" onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div>
  <label>Password</label>
  <input required type="password" onChange={(e)=>setPassword(e.target.value)} />
  </div>

  <input className={styles.submit_btn} type="submit" value="submit" />
</form>
        </div>
    )
}