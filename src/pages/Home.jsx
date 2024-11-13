import BrandsList from "../components/BrandsList";
import ProductList from "../components/ProductList";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a BIKEMTB</h1>
        <p>
          Explora nuestra selección de bicicletas de montaña de alta calidad,
          diseñadas para todos los niveles y estilos.
        </p>
        <button className="explore-button">Explorar Bicicletas</button>
      </header>

      <section className="brands-section">
        <h2>Marcas Destacadas</h2>
        <BrandsList />
      </section>

      <section className="featured-products">
        <h2>Bicicletas Populares</h2>
        <ProductList /> {}
      </section>
    </div>
  );
}

export default Home;
