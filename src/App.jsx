import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoutes";
import PageNotFound from "./pages/PageNotFound";
import CouponLogin from "./pages/CouponLogin";
import Products from "./pages/Products";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";

function App() {
  const isAuth = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* protected route start ----------- */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Products />} />
            <Route
              path="/category/:id/product-description/:id"
              element={<ProductDescription />}
            />
            <Route path="/cart" element={<Cart />} />
          </Route>
          {/* protected route end ----------- */}

          {!isAuth && <Route path="/login-coupon" element={<CouponLogin />} />}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
