import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./context/CartProvider";
import FilterProvider from "./context/FilterContextProvider";
import "./styles/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CartProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </CartProvider>
);
