import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";

function ProductCard({ model, brand, price, image }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { model, brand, price, image };

    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={image} alt={`${brand} ${model}`} />
      <div className="product-card-content">
        <h2 className="product-card-title">{`${brand} - ${model}`}</h2>
        <p className="product-card-price">${price}</p>
        <button className="product-card-button" onClick={handleAddToCart}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
