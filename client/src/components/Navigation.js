import { Route, Routes } from "react-router";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Favourite from "../Pages/Favorite";
import Home from "../Pages/Home";
import Login from "../Pages/Login";


import OurProducts from "../Pages/OurProducts";
import SignUp from "../Pages/Signup";

function Nav() {
    return (
        <div>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="cart" element={<Cart />} />
                <Route path="ourproducts" element={<OurProducts />} />
                <Route path="favourite" element={<Favourite />} />
            </Routes>

        </div>

    )

}
export default Nav;