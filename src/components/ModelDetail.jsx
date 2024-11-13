import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";

const ModelDetail = () => {
  const { modelId } = useParams();
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error al cargar el producto.</p>;

  const product = products.find((product) => product.id === parseInt(modelId));

  if (!product) return <p>Producto no encontrado.</p>;

  const { model, brand, description, price, specs } = product;

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

export default ModelDetail;
