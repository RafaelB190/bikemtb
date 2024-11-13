import useContext from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
          </div>
        ))
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
}

export default Cart;
