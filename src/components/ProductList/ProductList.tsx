import './ProductList.css';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className='product-list'>
      <h2>Lista de Productos</h2>
      {products.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unidad</th>
              <th>Precio Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='product-image'
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>${Number(product.price) * product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
