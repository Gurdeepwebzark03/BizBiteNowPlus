import { Navigate, useLocation } from "react-router-dom";

const CustomerGate = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("customerToken");

  if (!token) {
    return (
      <Navigate
        to="/customer/onboarding"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default CustomerGate;
