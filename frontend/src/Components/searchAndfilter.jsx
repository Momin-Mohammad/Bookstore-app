import { useState } from "react";
import styles from "./searchAndfilter.module.css";

export default function Search({sortByPrice,sortByGenre,searchBook}){
   const[book,setBook] = useState();
    return(
        <div className={styles.Search_main_div}>
            <div className={styles.selectTag_div}>
                <select onChange={(e)=>sortByPrice(e.target.value)}>
                    <option value="sort">select order</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to low</option>
                </select>

                <select onChange={(e)=>sortByGenre(e.target.value)}>
                    <option value="filter">select genre</option>
                    <option value="horror">Horror</option>
                    <option value="thriller">Thriller</option>
                </select>
            </div>

            <div>
                <input onChange={(e)=>setBook(e.target.value)} type="text" placeholder="Enter Book Name"/>
                <button onClick={()=>searchBook(book)}>Search</button>
            </div>
        </div>
    )
}