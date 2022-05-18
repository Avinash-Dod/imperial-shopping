import { Route, Routes } from "react-router";
import AddProduct from "../Admin/Components/Modals/AddProduct";
// import AddCustomer from "../Admin/Components/Modals/CustomerAdd";
import EditCustomer from "../Admin/Components/Modals/CustomerEdit";
import AdminLogin from "../Admin/Pages/AdminLogin";
import Customer from "../Admin/Pages/Customer";
import Dashboard from "../Admin/Pages/Dashboard";
import Orders from "../Admin/Pages/Orders";
import Product from "../Admin/Pages/Product";
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
                <Route exact path="*" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="cart" element={<Cart />} />
                <Route path="ourproducts" element={<OurProducts />} />
                <Route path="favourite" element={<Favourite />} />
                <Route path="productDetail" element={<ProductDetail />} />
                <Route path="checkout" element={<Checkout />} />
                {/* admin Router */}
                <Route path="alogin" element={<AdminLogin />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="customers" element={<Customer />} />
                <Route path="editCustomer" element={<EditCustomer />} />                
                <Route path="products" element={<Product />} />
                <Route path="addProduct" element={<AddProduct />} />
                {/* <Route path="reviews" element={<Reviews />} /> */}
                {/* order routes */}
                <Route path="orders" element={<Orders />} />
            </Routes>
        </div>
    )
}
export default Nav;