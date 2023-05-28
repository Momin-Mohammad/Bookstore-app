import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DetailsPage from "../Pages/DetailsPage";
import SignUpPage from "../Pages/signUpPage";

export default function AllRoutes(){
    return(
<Routes>
    <Route path="/"  element={<HomePage/>}/>
    <Route path="/books/:book"  element={<DetailsPage/>}/>
    <Route path="/cart"  element={<h1>Cart Page</h1>}/>
    <Route path="/checkout"  element={<h1>Checkout Page</h1>}/>
    <Route path="/*"  element={<h1>Broken Link</h1>}/>
    <Route path="/signUp" element={<SignUpPage/>} />
    <Route path="/login" element={<h1>Login Page</h1>} />
</Routes>
    )
}