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
    const existingProductIndex = cartProducts.findIndex(
      (p) => p.id === product.id
    );

    let updatedProducts;

    if (existingProductIndex >= 0) {
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
      updatedProducts = [...cartProducts, product];

      if (cartProducts.length === 0) {
        const startDate = getCurrentDate();
        setCartStartDate(startDate);
        localStorage.setItem('cartStartDate', startDate);
      }
    }

    setCartProducts(updatedProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
  };

  const handleClearCart = () => {
    setCartProducts([]);
    setCartStartDate(undefined);
    localStorage.removeItem('cartProducts');
    localStorage.removeItem('cartStartDate');
  };

  return (
    <main>
      <Header />
      <AddToCart onAddProduct={handleAddProduct} />
      <ProductList
        products={cartProducts}
        cartStartDate={cartStartDate}
        onClearCart={handleClearCart}
      />
    </main>
  );
}

export default App;
