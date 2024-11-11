import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>BIKEMTB</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/brands">Marcas</Link>
        <Link to="/cart">Carrito</Link>
      </nav>
    </header>
  );
}

export default Header;
