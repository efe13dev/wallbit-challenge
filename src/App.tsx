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
    const updatedProducts = [...cartProducts, product];
    setCartProducts(updatedProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));

    // Establecer la fecha solo si es el primer producto
    if (cartProducts.length === 0) {
      const startDate = getCurrentDate();
      setCartStartDate(startDate);
      localStorage.setItem('cartStartDate', startDate);
    }
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
