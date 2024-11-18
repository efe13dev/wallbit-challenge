import './ProductList.css';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  cartStartDate?: string;
}

function ProductList({ products, cartStartDate }: ProductListProps) {
  const totalItems = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const totalCost = products.reduce(
    (sum, product) => sum + Number(product.price) * product.quantity,
    0
  );

  return (
    <div className='product-list'>
      {products.length === 0 ? (
        <>
          <p>Carrito de compra</p>
          <p>No hay productos en el carrito...</p>
        </>
      ) : (
        <>
          <p className='cart-date'>
            Carrito de compra - Iniciado el {cartStartDate}
          </p>
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
                  <td>{product.price} $</td>
                  <td>{Number(product.price) * product.quantity} $</td>
                </tr>
              ))}
              {/* Nueva fila para totales */}
              <tr className='cart-totals'>
                <td colSpan={2}>Total:</td>
                <td>{totalItems} productos</td>
                <td></td>
                <td>{totalCost} $</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ProductList;
