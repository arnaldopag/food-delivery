import React from "react";
import NavBar from "./components/nav-bar/navBar";
import FoodItem from "./components/FoodItem/FoodItem";

const App = () => {
    return (
        <div className="app">
            <NavBar />
            <FoodItem />
        </div>
    );
};

export default App;
