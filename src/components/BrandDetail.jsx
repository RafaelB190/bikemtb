import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

// Agregar precios a los modelos
const models = {
  venzo: [
    { name: "Venzo Ridge", price: 350 },
    { name: "Venzo Raptor", price: 400 },
    { name: "Venzo Nitro", price: 450 },
  ],
  bh: [
    { name: "BH Ultimate", price: 500 },
    { name: "BH Lynx", price: 550 },
    { name: "BH Atom", price: 600 },
  ],
  vairo: [
    { name: "Vairo X3", price: 420 },
    { name: "Vairo XR", price: 480 },
    { name: "Vairo Storm", price: 530 },
  ],
  scott: [
    { name: "Scott Scale", price: 650 },
    { name: "Scott Spark", price: 700 },
    { name: "Scott Aspect", price: 750 },
  ],
  slp: [
    { name: "SLP S6", price: 380 },
    { name: "SLP R5", price: 430 },
    { name: "SLP X3", price: 480 },
  ],
  trek: [
    { name: "Trek Marlin", price: 500 },
    { name: "Trek X-Caliber", price: 550 },
    { name: "Trek Procaliber", price: 600 },
  ],
};

function BrandDetail() {
  const { brandName } = useParams();
  const brandModels = models[brandName] || [];

  return (
    <section>
      <h2>{brandName.toUpperCase()}</h2>
      <div>
        {brandModels.map(({ name, price }) => (
          <ProductCard
            key={name}
            model={name}
            brand={brandName}
            price={price}
          />
        ))}
      </div>
    </section>
  );
}

export default BrandDetail;
