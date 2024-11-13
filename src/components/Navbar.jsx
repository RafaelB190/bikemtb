import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/products">Productos</Link>
    </nav>
  );
}

export default Navbar;
