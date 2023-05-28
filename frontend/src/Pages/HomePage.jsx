import { useEffect, useState } from "react";
import Search from "../Components/searchAndfilter";
import axios from "axios";
import Books from "../Components/Books";
import styles from "./HomePage.module.css";

export default function HomePage(){
    const[booksData,setBookData] = useState([]);

    useEffect(()=>{
        axios.get("https://library-data.onrender.com/books")
        .then(res=>{
            console.log(res.data)
            setBookData(res.data);
        }).catch(err=>console.log("Error loading Books"))
    },[])
    return(
        <div>
            <Search/>

            <div className={styles.Books_div}>
                {
                    booksData.length > 0 ?
                    booksData.map((ele)=>
                        <Books
                    bookImg = {ele.image_url}
                    bookName = {ele.book_name}
                    author = {ele.author}
                    genre = {ele.genre}
                    price = {ele.cost}
                     />
                    )
                      : <h1>Loading Books...</h1>
                }
            </div>
        </div>
    )
}