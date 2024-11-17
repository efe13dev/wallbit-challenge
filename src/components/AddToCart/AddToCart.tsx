import { useState } from 'react';
import './AddToCart.css';
import { getSingleProduct } from '../../services/getSingleProduct';

import { Product } from '../../types';

interface AddToCartProps {
  onAddProduct: (product: Product) => void;
}

function AddToCart({ onAddProduct }: AddToCartProps) {
  const [productId, setProductId] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = await getSingleProduct(Number(productId));
    if (product) {
      onAddProduct({ ...product, quantity });
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleProductIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(e.target.value);
  };

  return (
    <section>
      <p>Agrega los productos al carro de compra</p>
      <form onSubmit={handleSubmit}>
        <input
          className='quantity'
          type='number'
          placeholder='Cantidad'
          value={quantity}
          onChange={handleQuantityChange}
        />
        <input
          className='product-id'
          type='text'
          placeholder='Id del producto'
          value={productId}
          onChange={handleProductIdChange}
        />

        <button type='submit'>Agregar</button>
      </form>
    </section>
  );
}

export default AddToCart;
