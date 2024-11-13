import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BrandDetail from "./components/BrandDetail";
import BrandsList from "./components/BrandsList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModelDetail from "./components/ModelDetail";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/product/:modelId" element={<ModelDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/brands" element={<BrandsList />} />
        <Route path="/brand/:brandName" element={<BrandDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/SearchBar" element={<SearchBar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
