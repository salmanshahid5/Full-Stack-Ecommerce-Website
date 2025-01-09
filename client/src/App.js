import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Product List Page */}
        <Route path="/products/:category" element={<ProductList />} />

        {/* Single Product Page */}
        <Route path="/product/:id" element={<Product />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Success page */}
        <Route path="/success" element={<Success />} />

        {/* Login Page */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
