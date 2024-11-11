function Checkout() {
  return (
    <section>
      <h2>Finalizar Compra</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" required />

        <label>Dirección:</label>
        <input type="text" required />

        <label>Método de Pago:</label>
        <select>
          <option value="credit">Tarjeta de Crédito</option>
          <option value="debit">Tarjeta de Débito</option>
        </select>

        <button type="submit">Comprar</button>
      </form>
    </section>
  );
}

export default Checkout;
