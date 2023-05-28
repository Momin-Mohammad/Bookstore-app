import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function DetailsPage(){
    const navigate = useNavigate();
    const bookName = useParams();
    const[bookImg,setBookImg] = useState("");

    useEffect(()=>{
        axios.post(`https://bookstore-app.cyclic.app/books/${bookName.book}`)
        .then(res=>{
            setBookImg(res.data.data[0].image_url)
        }).catch(err=>console.log("Error:",err));
    },[])

    const addToCart = ()=>{
        axios.post(`https://bookstore-app.cyclic.app/cart/addToCart/${bookName.book}`)
        .then(res=>{
            alert(res.data.msg)
        }).catch(err=>console.log(err))
    }
   
    return(
        <div>
            <img src={bookImg} placeholder="Book image"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eaque error voluptatibus aliquid ipsam, sit tenetur deleniti id consequuntur est libero 
            magni at tempore mollitia! Eaque nostrum in magni atque pariatur.</p>
            <button onClick={()=>addToCart()}>Add to cart</button>
        </div>
    )
}