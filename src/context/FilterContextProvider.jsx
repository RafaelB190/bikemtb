import PropTypes from "prop-types";
import { useState } from "react";
import { FilterContext } from "./FilterContext";
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    brand: "",
    priceRange: [0, 1000],
  });

  const setBrandFilter = (brand) => {
    setFilters((prevFilters) => ({ ...prevFilters, brand }));
  };

  const setPriceRangeFilter = (priceRange) => {
    setFilters((prevFilters) => ({ ...prevFilters, priceRange }));
  };

  return (
    <FilterContext.Provider
      value={{ filters, setBrandFilter, setPriceRangeFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
