import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DetailsPage from "../Pages/DetailsPage";
import SignUpPage from "../Pages/signUpPage";
import LoginPage from "../Pages/loginPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";

export default function AllRoutes(){
    return(
<Routes>
    <Route path="/"  element={<HomePage/>}/>
    <Route path="/books/:book"  element={<DetailsPage/>}/>
    <Route path="/cart"  element={<CartPage/>}/>
    <Route path="/checkout"  element={<CheckoutPage/>}/>
    <Route path="/*"  element={<h1>Broken Link</h1>}/>
    <Route path="/signUp" element={<SignUpPage/>} />
    <Route path="/login" element={<LoginPage/>} />
</Routes>
    )
}