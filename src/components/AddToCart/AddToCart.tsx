import { useState } from 'react';
import './AddToCart.css';
import { getSingleProduct } from '../../services/getSingleProduct';

function AddToCart() {
  const [productId, setProductId] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSingleProduct(productId);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(e.target.value);
  };

  return (
    <section>
      <p>Agrega los productos al carro de compra</p>
      <form onSubmit={handleSubmit}>
        <input
          className='product-id'
          type='text'
          placeholder='Id del producto'
          value={productId}
          onChange={handleChange}
        />
        <button type='submit'>Agregar</button>
      </form>
    </section>
  );
}

export default AddToCart;
