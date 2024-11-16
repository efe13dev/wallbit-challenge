import './App.css';
import Header from './components/Header/Header';
import AddToCart from './components/AddToCart/AddToCart';
import ProductList from './components/ProductList/ProductList';
function App() {
  return (
    <main>
      <Header />
      <AddToCart />
      <ProductList />
    </main>
  );
}

export default App;
