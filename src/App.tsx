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

  const handleRemoveProduct = (productId: number) => {
    const updatedProducts = cartProducts.filter((p) => p.id !== productId);
    setCartProducts(updatedProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));

    if (updatedProducts.length === 0) {
      setCartStartDate(undefined);
      localStorage.removeItem('cartStartDate');
    }
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      return;
    }

    const updatedProducts = cartProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: newQuantity
        };
      }
      return product;
    });

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
        onClearCart={handleClearCart}
        onRemoveProduct={handleRemoveProduct}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </main>
  );
}

export default App;
