import './AddToCart.css';
import { useState } from 'react';
import { getSingleProduct } from '../../services/getSingleProduct';

import { Product } from '../../types';

interface AddToCartProps {
  onAddProduct: (product: Product) => void;
}

function AddToCart({ onAddProduct }: AddToCartProps) {
  const [productId, setProductId] = useState<Product['id']>();
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const product = await getSingleProduct(Number(productId));
      onAddProduct({ ...product, quantity });
      setProductId(undefined);
      setQuantity(1);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleProductIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(Number(e.target.value));
  };

  return (
    <section>
      <p>Agrega los productos al carro de compra</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor='quantity'>Cantidad:</label>
        <input
          id='quantity'
          className='quantity'
          type='number'
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
          aria-label='Cantidad de productos'
        />
        <input
          className='product-id'
          type='text'
          placeholder='Id del producto'
          value={productId ?? ''}
          onChange={handleProductIdChange}
        />

        <button type='submit'>Agregar</button>
      </form>
      {error && (
        <>
          <p className='error-message error-primary'>{error}</p>
          <p className='error-message'>Debes introducir un Id entre 1 y 20</p>
        </>
      )}
    </section>
  );
}

export default AddToCart;
