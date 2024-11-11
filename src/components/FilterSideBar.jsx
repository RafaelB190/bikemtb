import PropTypes from "prop-types";
import { useState } from "react";
const FilterSideBar = ({ brands, onFilter }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    onFilter({ brand: event.target.value, priceRange });
  };

  const handlePriceChange = (event) => {
    const newRange = event.target.value
      .split(",")
      .map((num) => parseInt(num, 10));
    setPriceRange(newRange);
    onFilter({ brand: selectedBrand, priceRange: newRange });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filtrar</h3>
      <div>
        <label>Marca:</label>
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Todas las marcas</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Rango de precio:</label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange.join(",")}
          onChange={handlePriceChange}
        />
        <span>{`$${priceRange[0]} - $${priceRange[1]}`}</span>
      </div>
    </div>
  );
};

FilterSideBar.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default FilterSideBar;
