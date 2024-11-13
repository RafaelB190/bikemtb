import { createContext, useContext } from "react";

export const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);
