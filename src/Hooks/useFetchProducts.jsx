import { useEffect, useState } from "react";

function useFetchProducts(url) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return { products, loading, error };
}

export default useFetchProducts;
