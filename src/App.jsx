import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Auth/Login";
import RegisterSeller from "./pages/Auth/RegisterSeller";
import DashboardLayout from "./components/Shared/DashboardLayout";
import Orders from "./pages/Dashboards/Seller/Orders";
import OrderDetails from "./pages/Dashboards/Seller/OrderDetails";
import SellerDashboard from "./pages/Dashboards/Seller/SellerDashboard";
// import CustomerDashboard from "./pages/Dashboards/CustomerDashboard";
// import Earnings from "./pages/Dashboards/Seller/Earnings";
import Profile from "./pages/Dashboards/Seller/profile";
import Products from "./pages/Dashboards/Seller/Products";
import Settings from "./pages/Dashboards/Seller/Settings";
import RegisterSuccess from "./pages/Auth/RegisterSuccess";

import DeliveryDashboard from "./pages/Dashboards/DeliveryDashboard/DeliveryDashboard"

=======
import FestiveMenu from "./pages/Dashboards/Seller/FestiveMenu";

import Analytics from "./pages/Dashboards/Seller/Analytics";

import StoreFront from "./pages/customer/StoreFront";
import AllMenu from "./pages/customer/AllMenu";
import Cart from "./pages/customer/Cart";
import ProductDetail from "./pages/customer/ProductDetail";
import Checkout from "./pages/customer/Checkout";
import OrderConfirmation from "./pages/customer/OrderConfirmation";
import CustomerProfile from "./pages/customer/Profile";
import CustomerOnboarding from "./pages/customer/CustomerOnboarding";
import CustomerGate from "./components/customer/CustomerGate";

// Future Modules
// import Orders from './pages/Dashboards/Seller/Orders';
// import Customers from './pages/Dashboards/Seller/Customers';
// import Analytics from './pages/Dashboards/Seller/Analytics';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 m-0 p-0 box-border overflow-x-hidden">
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/storefront" replace />} />


        {/* Authentication */}
        <Route path="/seller/login" element={<Login />} />
        <Route path="/seller/register" element={<RegisterSeller />} />
        <Route path="/seller/register-success" element={<RegisterSuccess />} />

        {/* Customer */}

        <Route path="/customer/onboarding" element={<CustomerOnboarding />} />
        <Route
          path="/storefront"
          element={
            <CustomerGate>
              <StoreFront />
            </CustomerGate>
          }
        />
        <Route
          path="/menu"
          element={
            <CustomerGate>
              <AllMenu />
            </CustomerGate>
          }
        />
        <Route
          path="/cart"
          element={
            <CustomerGate>
              <Cart />
            </CustomerGate>
          }
        />
        <Route
          path="/product/:id"
          element={
            <CustomerGate>
              <ProductDetail />
            </CustomerGate>
          }
        />
        <Route
          path="/checkout"
          element={
            <CustomerGate>
              <Checkout />
            </CustomerGate>
          }
        />
        <Route
          path="/order/:id"
          element={
            <CustomerGate>
              <OrderConfirmation />
            </CustomerGate>
          }
        />
        <Route
          path="/customer/profile"
          element={
            <CustomerGate>
              <CustomerProfile />
            </CustomerGate>
          }
        />

        {/* Seller Dashboard */}

        <Route path="/seller" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetails />} />
          <Route path="delivery" element={<DeliveryDashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="products" element={<Products />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="festivemenu" element={<FestiveMenu/>}/>
          <Route path="festivemenu/create" element={<CreateFestiveMenu />} />

        </Route>
        {/* Registration Success */}
        <Route
          path="/register-success"
          element={
            <div className="min-h-screen w-full bg-[#f4fbf7] flex items-center justify-center p-4 font-sans text-xs text-slate-800">
              <div className="bg-white w-full max-w-sm rounded-2xl p-6 text-center space-y-4 border border-emerald-100 shadow-xl">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-7 h-7">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1118 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    Registration Successful!
                  </h3>

                  <p className="text-slate-400 font-medium">
                    Your seller account has been created successfully.
                  </p>
                </div>

                <a
                  href="/storefront"
                  className="w-full bg-[#059669] text-white py-2.5 rounded-xl font-black shadow block text-center transition hover:bg-[#047857]">
                  Go To Storefront Market
                </a>
              </div>
            </div>
          }
        />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/seller/register" replace />} />
      </Routes>
    </div>
  );
}
