// Baki saare imports ke sath check kar lena...
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import { RegisterSeller } from './pages/Auth/RegisterSeller';
import SellerDashboard from './pages/Dashboards/Seller/SellerDashboard';
import CustomerDashboard from './pages/Dashboards/CustomerDashboard';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 m-0 p-0 box-border overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/seller" element={<RegisterSeller />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/storefront" element={<CustomerDashboard />} />
        
        {/* 🚀 FIXED ROUTE: Isko add karte hi No routes matched ka crash khatam! */}
        <Route path="/register-success" element={
          <div className="min-h-screen w-full bg-[#f4fbf7] flex items-center justify-center p-4 font-sans text-xs text-slate-800">
            <div className="bg-white w-full max-w-sm rounded-2xl p-6 text-center space-y-4 border border-emerald-100 shadow-xl">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">Registration Successful!</h3>
                <p className="text-slate-400 font-medium">Aapka account pipeline setup backend se successfully handshake kar chuka hai.</p>
              </div>
              <a href="/storefront" className="w-full bg-[#059669] text-white py-2.5 rounded-xl font-black shadow block text-center transition hover:bg-[#047857]">
                Go To Storefront Market
              </a>
            </div>
          </div>
        } />

      </Routes>
    </div>
  );
}