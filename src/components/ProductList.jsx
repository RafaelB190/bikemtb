import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import useFetchProducts from "../hooks/useFetchProducts";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";

import bhAtom from "../assets/images/mtb/bh-atom.jpeg";
import bhLynx from "../assets/images/mtb/bh-lynx.jpeg";
import bhUltimate from "../assets/images/mtb/bh-ultimate.jpeg";
import scottAspect from "../assets/images/mtb/scott-aspect.jpeg";
import scottScale from "../assets/images/mtb/scott-scale.jpeg";
import scottSpark from "../assets/images/mtb/scott-spark.jpeg";
import slpR5 from "../assets/images/mtb/slp-r5.jpeg";
import slpS6 from "../assets/images/mtb/slp-s6.jpeg";
import slpX3 from "../assets/images/mtb/slp-x3.jpeg";
import trekMarlin from "../assets/images/mtb/trek-marlin.jpeg";
import trekProcaliber from "../assets/images/mtb/trek-procaliber.jpeg";
import trekXCaliber from "../assets/images/mtb/trek-x-caliber.jpeg";
import vairoStorm from "../assets/images/mtb/vairo-storm.jpeg";
import vairoX3 from "../assets/images/mtb/vairo-x3.jpeg";
import vairoXr from "../assets/images/mtb/vairo-xr.jpeg";
import venzoNitro from "../assets/images/mtb/venzo-nitro.jpeg";
import venzoRaptor from "../assets/images/mtb/venzo-raptor.jpeg";
import venzoRidge from "../assets/images/mtb/venzo-ridge.jpg";

function ProductList() {
  const { loading, error } = useFetchProducts(
    "https://fakestoreapi.com/products"
  );

  const { filters } = useContext(FilterContext);

  const localProducts = [
    { id: 101, title: "BH Atom", price: 600, brand: "BH", image: bhAtom },
    { id: 102, title: "BH Lynx", price: 550, brand: "BH", image: bhLynx },
    {
      id: 103,
      title: "BH Ultimate",
      price: 500,
      brand: "BH",
      image: bhUltimate,
    },
    {
      id: 104,
      title: "Scott Aspect",
      price: 750,
      brand: "Scott",
      image: scottAspect,
    },
    {
      id: 105,
      title: "Scott Scale",
      price: 650,
      brand: "Scott",
      image: scottScale,
    },
    {
      id: 106,
      title: "Scott Spark",
      price: 700,
      brand: "Scott",
      image: scottSpark,
    },
    { id: 107, title: "SLP R5", price: 430, brand: "SLP", image: slpR5 },
    { id: 108, title: "SLP S6", price: 380, brand: "SLP", image: slpS6 },
    { id: 109, title: "SLP X3", price: 480, brand: "SLP", image: slpX3 },
    {
      id: 110,
      title: "Trek Marlin",
      price: 500,
      brand: "Trek",
      image: trekMarlin,
    },
    {
      id: 111,
      title: "Trek X-Caliber",
      price: 550,
      brand: "Trek",
      image: trekXCaliber,
    },
    {
      id: 112,
      title: "Trek Procaliber",
      price: 600,
      brand: "Trek",
      image: trekProcaliber,
    },
    {
      id: 113,
      title: "Vairo Storm",
      price: 530,
      brand: "Vairo",
      image: vairoStorm,
    },
    { id: 114, title: "Vairo X3", price: 420, brand: "Vairo", image: vairoX3 },
    { id: 115, title: "Vairo XR", price: 480, brand: "Vairo", image: vairoXr },
    {
      id: 116,
      title: "Venzo Nitro",
      price: 450,
      brand: "Venzo",
      image: venzoNitro,
    },
    {
      id: 117,
      title: "Venzo Raptor",
      price: 400,
      brand: "Venzo",
      image: venzoRaptor,
    },
    {
      id: 118,
      title: "Venzo Ridge",
      price: 350,
      brand: "Venzo",
      image: venzoRidge,
    },
  ];

  const filteredProducts = localProducts.filter((product) => {
    const matchesBrand = filters.brand ? product.brand === filters.brand : true;
    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];

    return matchesBrand && matchesPrice;
  });

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar los productos: {error}</p>;

  return (
    <div>
      <h1>Productos</h1>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            model={product.title}
            brand={product.brand}
            price={product.price}
            image={product.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
