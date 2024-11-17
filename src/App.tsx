import './App.css';
import Header from './components/Header/Header';
import AddToCart from './components/AddToCart/AddToCart';
import ProductList from './components/ProductList/ProductList';
import { useState, useEffect } from 'react';
import { Product } from './types';

function App() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('cartProducts');
    if (storedProducts) {
      setCartProducts(JSON.parse(storedProducts));
    }
  }, []);

  const handleAddProduct = (product: Product) => {
    const updatedProducts = [...cartProducts, product];
    setCartProducts(updatedProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
  };

  return (
    <main>
      <Header />
      <AddToCart onAddProduct={handleAddProduct} />
      <ProductList products={cartProducts} />
    </main>
  );
}

export default App;
