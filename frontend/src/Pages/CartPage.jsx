import axios from "axios"
import { useEffect, useState } from "react"
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router-dom";
import styles from "./CartPage.module.css";

export default function CartPage(){
    const navigate = useNavigate();
    const[cartItem,setCartItem] = useState([]);
    const[cartTotal,setCartTotal] = useState(0);

    useEffect(()=>{
        axios.get("https://bookstore-app.cyclic.app/cart")
        .then(res=>{
            setCartItem(res.data.data);
            setCartTotal(res.data.total);
            console.log(res.data.data);
        })
    },[])

    return(
        <div className={styles.cartPage_main_div}>
            {
              cartItem.length == 0 ?
              <h2>The Cart is Empty</h2>  
              :
              cartItem.map(ele=>
              <CartItem
              name ={ele.book_name}
              cost ={ele.cost}
              qty ={ele.qty}
              image ={ele.image_url}
              />  
                )
            }
           <h1>Total : {cartTotal}</h1>
           <button onClick={()=>navigate("/checkout")}>Checkout</button>
        </div>
    )
}