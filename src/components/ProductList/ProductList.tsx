import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <h2>Productos en el carrito</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Nombre: {product.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
