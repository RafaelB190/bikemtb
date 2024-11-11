import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BrandDetail from "./components/BrandDetail";
import BrandsList from "./components/BrandsList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
