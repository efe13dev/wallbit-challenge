import './AddToCart.css';

function AddToCart() {
  return (
    <section>
      <p>Agrega los productos al carro de compra</p>
      <form>
        <input
          className='quantity'
          type='text'
          placeholder='Cantidad'
        />
        <input
          className='product-id'
          type='text'
          placeholder='Id del producto'
        />
        <button>Agregar</button>
      </form>
    </section>
  );
}

export default AddToCart;
