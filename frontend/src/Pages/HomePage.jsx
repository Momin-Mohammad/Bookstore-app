import { useEffect, useState } from "react";
import Search from "../Components/searchAndfilter";
import axios from "axios";
import Books from "../Components/Books";
import styles from "./HomePage.module.css";

export default function HomePage(){
    const[booksData,setBookData] = useState([]);
    const [sort,setSort] = useState('sort');
    const [filter,setFilter] = useState('filter');

    useEffect(()=>{
        axios.get(`https://bookstore-app.cyclic.app/books/${sort}/${filter}`)
        .then(res=>{
            setBookData(res.data.data);
        }).catch(err=>console.log("Error loading Books"));
      
    },[sort,filter])

    const sortByPrice = (order)=>{
        setSort(order)
       
    }

    const sortByGenre = (genre)=>{
        setFilter(genre);
    }

    const searchBook = (book)=>{
        if(book === "" || book === undefined){
            axios.get("https://bookstore-app.cyclic.app/books")
            .then(res=>{
                setBookData(res.data.data);
            }).catch(err=>console.log("Error loading Books"));
        }else{
            axios.post(`https://bookstore-app.cyclic.app/books/${book}`)
            .then(res=>{
                console.log(res.data)
                setBookData(res.data.data);
            }).catch(err=>console.log("Error loading Books"));
        }
    }

    return(
        <div>
            <Search 
            sortByPrice = {sortByPrice}
            sortByGenre = {sortByGenre}
            searchBook = {searchBook}
            />

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
                      : <h1>No Book Found</h1>
                }
            </div>
        </div>
    )
}