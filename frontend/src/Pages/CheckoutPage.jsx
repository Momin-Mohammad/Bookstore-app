import axios from "axios";
import { useEffect, useState } from "react";

export default function CheckoutPage(){
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[address,setAddress] = useState('');
    const[total,setTotal] = useState(0)

    const submitForm=(e)=>{
        e.preventDefault();
        let formData = {
            name : name,
            email : email,
            phone : phone,
            address : address
        }
        console.log(formData)
    }

    useEffect(()=>{
        axios.get("https://bookstore-app.cyclic.app/cart")
        .then(res=>{
            setTotal(res.data.total)
            console.log(res.data.data);
        }).catch(err=>console.log(err))
        },[])

    return(
        <div>
            <form onSubmit={submitForm}>
                <div>
  <label>Full Name</label>
  <input required type="text" onChange={(e)=>setName(e.target.value)} />
  </div>

  <div>
  <label>Email</label>
  <input required type="email" onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div>
  <label>Phone</label>
  <input required type="number" onChange={(e)=>setPhone(e.target.value)} />
  </div>

  <div>
  <label>Address</label>
  <input required type="number" onChange={(e)=>setAddress(e.target.value)} />
  </div>
  
  <input type="submit" value="submit" />
</form>

<h2>Total Amount : {total}</h2>

<button onClick={()=>alert("Order Placed")}>Place Order</button>
        </div>
    )
}