import PropTypes from "prop-types";

const ProductCard = ({ model, brand, price }) => {
  return (
    <div className="product-card">
      <h3>{model}</h3>
      <p>Marca: {brand}</p>
      <p>Precio: ${price}</p>
      <button>Ver detalles</button>
    </div>
  );
};

ProductCard.propTypes = {
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
