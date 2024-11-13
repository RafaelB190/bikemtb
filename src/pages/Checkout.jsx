import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleContinueShopping = () => {
    navigate("/productos");
  };

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Finalizar Compra</h2>

      {}
      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
          <p className="text-lg font-medium">
            ¡Muchas gracias por su compra! Lo esperamos pronto por aquí.
          </p>
        </div>
      ) : (
        <>
          {}
          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">Resumen del Carrito</h3>
            {cart.length === 0 ? (
              <p>No tienes productos en el carrito.</p>
            ) : (
              <ul className="space-y-2">
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{`${product.brand} - ${product.model}`}</span>
                    <span>${product.price}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 font-semibold">Total: ${total}</p>
          </div>

          {}
          <div className="flex justify-between mb-6">
            <button
              onClick={handleContinueShopping}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Seguir Comprando
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-md shadow-md"
          >
            <label className="block mb-2 font-medium">Nombre:</label>
            <input
              type="text"
              required
              className="border p-2 w-full rounded-md mb-4"
            />

            <label className="block mb-2 font-medium">Dirección:</label>
            <input
              type="text"
              required
              className="border p-2 w-full rounded-md mb-4"
            />

            <label className="block mb-2 font-medium">Método de Pago:</label>
            <select className="border p-2 w-full rounded-md mb-4">
              <option value="credit">Tarjeta de Crédito</option>
              <option value="debit">Tarjeta de Débito</option>
            </select>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
            >
              Comprar
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default Checkout;
