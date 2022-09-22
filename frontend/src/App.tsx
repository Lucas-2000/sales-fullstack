import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ProductCreate from './pages/products/create/ProductCreate';
import ProductEdit from './pages/products/edit/ProductEdit';
import Product from './pages/products/product/Product';
import Products from './pages/products/Products';
import GlobalStyle from './styles/GlobalStyle';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/create" element={<ProductCreate />} />
        <Route path="/products/edit/:id" element={<ProductEdit />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
