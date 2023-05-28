import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function DetailsPage(){
    const bookName = useParams();
    const[bookImg,setBookImg] = useState("");

    useEffect(()=>{
        axios.get(`https://library-data.onrender.com/books?book_name=${bookName.book}`)
        .then(res=>{
            setBookImg(res.data[0].image_url)
        }).catch(err=>console.log("Error"));
    },[])
   
    return(
        <div>
            <img src={bookImg} placeholder="Book image"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eaque error voluptatibus aliquid ipsam, sit tenetur deleniti id consequuntur est libero 
            magni at tempore mollitia! Eaque nostrum in magni atque pariatur.</p>
        </div>
    )
}