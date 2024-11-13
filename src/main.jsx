import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./context/CartContext";
import { FilterProvider } from "./context/FilterContext";
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

createRoot(document.getElementById("root")).render(<App />);
