import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
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
