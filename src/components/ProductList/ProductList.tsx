import { useState, useEffect } from 'react';
import { Product } from '../../types';
import { getCartProducts } from '../../utils/getCartProduct';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  const [_cartProducts, setCartProducts] = useState<Product[]>([]);

  // Cargar productos al montar el componente
  useEffect(() => {
    const savedProducts = getCartProducts();
    setCartProducts(savedProducts);
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>
              <p>Nombre: {product.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
