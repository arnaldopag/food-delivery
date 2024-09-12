import React from "react";
import NavBar from "./components/nav-bar/navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/cart"
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
const App = () => {
    return (
        <div className="app">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/placeOrder" element={<PlaceOrder />} />
            </Routes>
        </div>
    );
};

export default App;
