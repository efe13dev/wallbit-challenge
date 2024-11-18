import './App.css';
import Header from './components/Header/Header';
import AddToCart from './components/AddToCart/AddToCart';
import ProductList from './components/ProductList/ProductList';
import { useState, useEffect } from 'react';
import { Product } from './types';
import { getCurrentDate } from './utils/getCurrentDate';

function App() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [cartStartDate, setCartStartDate] = useState<string>();

  useEffect(() => {
    const storedProducts = localStorage.getItem('cartProducts');
    const storedDate = localStorage.getItem('cartStartDate');

    if (storedProducts) {
      setCartProducts(JSON.parse(storedProducts));
    }
    if (storedDate) {
      setCartStartDate(storedDate);
    }
  }, []);

  const handleAddProduct = (product: Product) => {
    // Buscar si el producto ya existe en el carrito
    const existingProductIndex = cartProducts.findIndex(
      (p) => p.id === product.id
    );

    let updatedProducts;

    if (existingProductIndex >= 0) {
      // Si existe, actualizar la cantidad
      updatedProducts = cartProducts.map((p, index) => {
        if (index === existingProductIndex) {
          return {
            ...p,
            quantity: p.quantity + product.quantity
          };
        }
        return p;
      });
    } else {
      // Si no existe, agregar como nuevo producto
      updatedProducts = [...cartProducts, product];

      // Establecer la fecha solo si es el primer producto
      if (cartProducts.length === 0) {
        const startDate = getCurrentDate();
        setCartStartDate(startDate);
        localStorage.setItem('cartStartDate', startDate);
      }
    }

    setCartProducts(updatedProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
  };

  return (
    <main>
      <Header />
      <AddToCart onAddProduct={handleAddProduct} />
      <ProductList
        products={cartProducts}
        cartStartDate={cartStartDate}
      />
    </main>
  );
}

export default App;
