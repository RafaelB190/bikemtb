import { useEffect, useState } from "react";
import FilterSideBar from "../components/FilterSideBar";
import ProductList from "../components/ProductList";
import "../styles/BrandList.css";

const BrandsList = () => {
  const [allProducts, setAllProducts] = useState([]); // Todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleFilter = (filter) => {
    const { brand, minPrice, maxPrice } = filter;
    const filtered = allProducts.filter((product) => {
      const isWithinPriceRange =
        product.price >= minPrice && product.price <= maxPrice;
      const matchesBrand = brand ? product.brand === brand : true;
      return isWithinPriceRange && matchesBrand;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="brands-list">
      <FilterSideBar
        brands={["venzo", "bh", "vairo", "scott", "slp", "trek"]}
        onFilter={handleFilter}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default BrandsList;
