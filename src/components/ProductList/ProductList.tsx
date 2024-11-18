import './ProductList.css';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  cartStartDate?: string;
  onClearCart: () => void;
}

function ProductList({
  products,
  cartStartDate,
  onClearCart
}: ProductListProps) {
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
          <p className='cart-title'>Carrito de compra</p>
          <p className='cart-empty'>No hay productos en el carrito...</p>
        </>
      ) : (
        <>
          <div className='cart-header'>
            <p className='cart-date'>
              Carrito de compra - Iniciado el {cartStartDate}
            </p>
            <button
              onClick={onClearCart}
              className='clear-cart-button'
            >
              Vaciar Carrito
            </button>
          </div>
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

              <tr className='cart-totals'>
                <td colSpan={2}>Total:</td>
                <td>{totalItems} productos</td>
                <td></td>
                <td>{totalCost.toFixed(2)} $</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ProductList;
