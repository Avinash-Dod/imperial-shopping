import { Route, Routes } from "react-router";
import AdminLogin from "../Admin/Pages/AdminLogin";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Contact from "../Pages/Contact";
import Favourite from "../Pages/Favorite";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import OurProducts from "../Pages/OurProducts";
import ProductDetail from "../Pages/ProductDetail";
import SignUp from "../Pages/Signup";

function Nav() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="alogin" element={<AdminLogin />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="cart" element={<Cart />} />
                <Route path="ourproducts" element={<OurProducts />} />
                <Route path="favourite" element={<Favourite />} />
                <Route path="productDetail" element={<ProductDetail />} />
                <Route path="checkout" element={<Checkout />} />
            </Routes>
        </div>
    )
}
export default Nav;