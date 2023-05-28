import axios from "axios"
import { useState } from "react";

export default function CartItem({image,name,cost,qty}){
    const [QTY,setQTY] = useState(qty);
    
    const removeItem = ()=>{
        axios.post(`https://bookstore-app.cyclic.app/cart/removeFromCart/${name}`)
        .then(res=>{
            console.log(res.data)
        }).catch(err=>console.log(err))
    }

    const updateQty = (q)=>{
        setQTY(prev=>prev+q)
        let quantity = {
            amount : qty+q
        }

        axios.post(`https://bookstore-app.cyclic.app/cart/updateQty/${name}`,quantity)
        .then(res=>{
            console.log(res.data)
        })

    }
    
    return(
        <div>
            <div>
            <img src={image}/>
            </div>
            <div>
                <h3>Book Name : {name}</h3>
                <h3>Cost : {cost}</h3>
                <h3>Qty : {QTY}</h3>
                <button onClick={()=>updateQty(1)}>+</button>
                <button disabled={QTY===1} onClick={()=>updateQty(-1)}>-</button>
                <button onClick={removeItem} >Remove Item</button>
            </div>
           </div>
    )
}