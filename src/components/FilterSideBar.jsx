import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import "../styles/FilterSideBar.css";

const FilterSideBar = ({ brands }) => {
  const { filters, setFilters } = useContext(FilterContext);
  const [selectedBrand, setSelectedBrand] = useState(filters.brand || "");
  const [minPrice, setMinPrice] = useState(filters.minPrice || 0);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || 1000);

  const handleBrandChange = (event) => {
    const newBrand = event.target.value;
    setSelectedBrand(newBrand);
    setFilters((prevFilters) => ({ ...prevFilters, brand: newBrand }));
  };

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value, 10);
    setMinPrice(newMinPrice);
    setFilters((prevFilters) => ({ ...prevFilters, minPrice: newMinPrice }));
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value, 10);
    setMaxPrice(newMaxPrice);
    setFilters((prevFilters) => ({ ...prevFilters, maxPrice: newMaxPrice }));
  };

  return (
    <div className="filter-sidebar">
      <h3>Filtrar</h3>
      <div className="filter-group">
        <label htmlFor="brand-select">Marca:</label>
        <select
          id="brand-select"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">Todas las marcas</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Rango de precio:</label>
        <div className="price-range">
          <input
            type="number"
            min="0"
            max="1000"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <span>-</span>
          <input
            type="number"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <p>{`$${minPrice} - $${maxPrice}`}</p>
      </div>
    </div>
  );
};

FilterSideBar.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSideBar;
