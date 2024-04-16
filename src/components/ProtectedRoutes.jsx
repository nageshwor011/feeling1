import { Outlet, Navigate, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const ProtectedRoute = () => {
  const isAuth = true;
  let location = useLocation();
  console.log("is auth ", isAuth);
  return isAuth ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate replace state={{ from: location }} to="/login-coupon" />
  );
};

export default ProtectedRoute;
