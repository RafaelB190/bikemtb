import PropTypes from "prop-types";

const ModelDetail = ({ model, brand, description, price, specs }) => {
  return (
    <div className="model-detail">
      <h1>
        {brand} - {model}
      </h1>
      <p>{description}</p>
      <h3>Especificaciones</h3>
      <ul>
        {specs.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <h2>${price}</h2>
    </div>
  );
};

ModelDetail.propTypes = {
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  specs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModelDetail;
