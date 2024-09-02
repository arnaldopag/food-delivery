import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StoreContextprovider from "./context/StoreContex.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <StoreContextprovider>
            <App />
        </StoreContextprovider>
    </BrowserRouter>
);
