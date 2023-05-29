import axios from "axios"
import { useState } from "react";
import styles from "./CartItem.module.css";

export default function CartItem({image,name,cost,qty}){
    const [QTY,setQTY] = useState(qty);
    
    const removeItem = ()=>{
        axios.post(`https://bookstore-app.cyclic.app/cart/removeFromCart/${name}`)
        .then(res=>{
            alert(res.data.msg);
            window.location.reload();
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
        <div className={styles.CartItemPage_main_div}>
            <div>
            <img src={image}/>
            </div>
            <div>
                <h3>Book Name : {name}</h3>
                <h3>Cost : {cost}</h3>
                <div className={styles.Qty_div}>
                <button onClick={()=>updateQty(1)}>+</button>
                <h3>{QTY}</h3>
                <button disabled={QTY===1} onClick={()=>updateQty(-1)}>-</button>
                </div>
                <button className={styles.removeItem_btn} onClick={removeItem} >Remove Item</button>
            </div>
           </div>
    )
}