import { Link } from "react-router-dom";

const Brands = ["Venzo", "BH", "Vairo", "Scott", "SLP", "Trek"];

function BrandsList() {
  return (
    <section>
      <h2>Nuestras Marcas</h2>
      <ul>
        {Brands.map((Brand) => (
          <li key={Brand}>
            <Link to={`/Brand/${Brand.toLowerCase()}`}>{Brand}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BrandsList;
