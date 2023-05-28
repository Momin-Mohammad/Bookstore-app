import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar(){
    return(
    <div className={styles.Navbar_div}>
        <Link style={{color:"black",textDecoration:"none"}} to="/"><h2>Home Page</h2></Link>
        <Link style={{color:"black",textDecoration:"none"}} to="/cart"><h2>Cart Page</h2></Link>
        <Link style={{color:"black",textDecoration:"none"}} to="/checkout"><h2>Checkout Page</h2></Link>
        <Link style={{color:"black",textDecoration:"none"}} to="/signUp"><h2>Sign Up</h2></Link>

    </div>
    )
}