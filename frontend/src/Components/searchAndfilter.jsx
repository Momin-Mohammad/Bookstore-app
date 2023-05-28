import styles from "./searchAndfilter.module.css";

export default function Search(){
    return(
        <div className={styles.Search_main_div}>
            <div>
                <select>
                    <option value="">Filter By Price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to low</option>
                </select>

                <select>
                    <option value="">Filter By Author</option>
                    <option value="j.k.rowling">J.K.Rowling</option>
                    <option value="david">David Benioff</option>
                </select>
            </div>

            <div>
                <input placeholder="Enter Book Name"/>
                <button>Search</button>
            </div>
        </div>
    )
}