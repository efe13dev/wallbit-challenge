import './App.css';
import Header from './components/Header/Header';
import AddToCart from './components/AddToCart/AddToCart';
import ProductList from './components/ProductList/ProductList';
import { useState } from 'react';
import { Product } from './types';

function App() {
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  const handleAddProduct = (product: Product) => {
    setCartProducts([...cartProducts, product]);
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
