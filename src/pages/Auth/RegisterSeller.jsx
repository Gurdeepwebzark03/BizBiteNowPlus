import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Store,
  Lock,
  MapPin,
  Building,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logoHorizontal from "../../assets/bizbite_logo_horizontal.png";

import { motion } from "framer-motion";


export default function RegisterSeller() {
  const navigate = useNavigate();
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    business_name: "",
    role: "Seller",
    pin: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.phoneNumber.trim() ||
    !formData.business_name.trim() ||
    !formData.pin.trim() ||
    !formData.address.trim() ||
    !formData.city.trim() ||
    !formData.state.trim()
  ) {
    setError("Please fill in all required fields.");
    return;
  }

  setLoading(true);

  // Fake API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Save demo seller locally
  localStorage.setItem(
    "pendingSeller",
    JSON.stringify(formData)
  );

  setLoading(false);

  navigate("/seller/register-success");
};

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#0b2b18] via-[#16522d] to-[#07140d]">
      {/* Background */}

      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#ffc700]/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>

      <div className="relative flex h-full items-center justify-center px-6">
            {showOTPModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center">Verify OTP</h2>

            <p className="mt-3 text-center text-gray-500">
              We've sent a 6-digit verification code to your registered email.
            </p>

            <p className="mt-2 text-center font-semibold text-[#1A4D2E] break-all">
              {form.email}
            </p>

            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="mt-8 w-full rounded-xl border border-gray-300 py-4 text-center text-2xl tracking-[12px] outline-none focus:border-[#1A4D2E] focus:ring-4 focus:ring-green-100"
            />

            <button
              onClick={handleVerifyOTP}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] py-4 font-semibold text-white"
            >
              Verify OTP
            </button>

            <button
              onClick={() => {
                setShowOTPModal(false);
                setOtp("");
              }}
              className="mt-3 w-full rounded-xl border border-gray-300 py-3 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="relative z-20 w-full max-w-6xl"
      >
        <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden  shadow-[0_40px_80px_rgba(22,82,45,0.15)]">
          {/* LEFT PANEL */}
          {/* ====================================== */}

          <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#16522d] via-[#124325] to-[#08160e] p-6 text-white overflow-hidden">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#ffc700]/10 blur-3xl"></div>

            <div className="relative z-10">
              <img
                src={logoHorizontal}
                alt="BizBiteNow"
                className="h-9 object-contain"
              />

              <span className="mt-4 inline-flex rounded-full bg-[#ffc700] px-3 py-1 text-[11px] font-bold text-[#16522d]">
                Plus Seller
              </span>

              <h1 className="mt-4 text-[32px] font-black leading-tight text-white">
                Grow Your
                <br />
                Restaurant
              </h1>

              <p className="mt-3 max-w-xs text-sm leading-6 text-green-100">
                Join thousands of restaurants using BizBiteNow to manage
                customers, orders and revenue from one dashboard.
              </p>
            </div>

            {/* Compact Features */}
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffc700] text-[#16522d] font-black">
                  ✓
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Zero Commission</h3>

                  <p className="text-[11px] text-green-100">
                    Keep every customer.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffc700] text-[#16522d] font-black">
                  ✓
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Business Dashboard</h3>

                  <p className="text-[11px] text-green-100">
                    Orders, menus & analytics.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffc700] text-[#16522d] font-black">
                  ✓
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Instant Order Alerts
                  </h3>

                  <p className="text-[11px] text-green-100">
                    Receive every order in real time.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffc700] text-[#16522d] font-black">
                  ✓
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Secure Seller Platform
                  </h3>

                  <p className="text-[11px] text-green-100">
                    Protected with enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================== */}
          {/* RIGHT PANEL */}
          {/* ====================================== */}

          <div className="flex items-center justify-center bg-white px-8 py-5">
            <div className="w-full max-w-xl">
              <div className="mb-3 flex justify-center lg:hidden">
                <img src={logoHorizontal} alt="BizBiteNow" className="h-10" />
              </div>

              <h1 className="text-3xl font-extrabold py-5 text-slate-900 tracking-tight">
                BizbitsNow<span className="text-emerald-500">PLUS</span>
              </h1>

              <h2 className="mt-3 text-3xl font-black text-[#16522d]">
                Create Account
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Register your restaurant and start selling today.
              </p>

              {error && (
                <div className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {/* Owner Name */}

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#16522d]">
                      Owner Name
                    </label>

                    <div className="group flex items-center rounded-lg border border-gray-200 px-3 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-2 focus-within:ring-[#16522d]/10">
                      <User size={16} className="text-gray-400" />

                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Business */}

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#16522d]">
                      Business Name
                    </label>

                    <div className="group flex items-center rounded-lg border border-gray-200 px-3 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-2 focus-within:ring-[#16522d]/10">
                      <Store size={16} className="text-gray-400" />

                      <input
                        type="text"
                        name="business_name"
                        required
                        value={formData.business_name}
                        onChange={handleChange}
                        placeholder="Restaurant Name"
                        className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#16522d]">
                      Email
                    </label>

                    <div className="group flex items-center rounded-lg border border-gray-200 px-3 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-2 focus-within:ring-[#16522d]/10">
                      <Mail size={16} className="text-gray-400" />

                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seller@email.com"
                        className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#16522d]">
                      Phone Number
                    </label>

                    <div className="group flex items-center rounded-lg border border-gray-200 px-3 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-2 focus-within:ring-[#16522d]/10">
                      <Phone size={16} className="text-gray-400" />

                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                      />
                    </div>
                  </div>
                  {/* PIN */}

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#16522d]">
                      Security PIN
                    </label>

                    <div className="group flex items-center rounded-lg border border-gray-200 px-3 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-2 focus-within:ring-[#16522d]/10">
                      <Lock size={16} className="text-gray-400" />

                      <input
                        type="password"
                        name="pin"
                        required
                        maxLength={4}
                        value={formData.pin}
                        onChange={handleChange}
                        placeholder="••••"
                        className="w-full bg-transparent px-3 py-2.5 text-sm font-mono tracking-[0.25em] outline-none"
                      />
                    </div>
                  </div>

                  {/* Address */}

                  <div >
                    <label className="mb-1 block text-xs font-semibold text-[#16522d]">
                      Business Address
                    </label>

                    <div className="group flex items-center rounded-lg border border-gray-200 px-3 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-2 focus-within:ring-[#16522d]/10">
                      <MapPin size={16} className="text-gray-400" />

                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Shop No. 4, Main Market"
                        className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* City */}

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#16522d]">
                      City
                    </label>

                    <div className="group flex items-center rounded-lg border border-gray-200 px-3 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-2 focus-within:ring-[#16522d]/10">
                      <Building size={16} className="text-gray-400" />

                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* State */}

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#16522d]">
                      State
                    </label>

                    <div className="group flex items-center rounded-lg border border-gray-200 px-3 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-2 focus-within:ring-[#16522d]/10">
                      <Building size={16} className="text-gray-400" />

                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Register Button */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#16522d] py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#1d6438] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="opacity-30"
                        />

                        <path
                          d="M22 12A10 10 0 0 0 12 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>

                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Seller Account</span>

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-gray-200"></div>

                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Already have an account?
                </span>

                <div className="h-px flex-1 bg-gray-200"></div>
              </div>

              {/* Login Button */}

              <Link
                to="/seller/login"
                className="group flex w-full items-center justify-center rounded-lg border border-[#16522d] py-2.5 text-sm font-semibold text-[#16522d] transition-all duration-300 hover:bg-[#16522d] hover:text-white"
              >
                Login Instead
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Footer */}

              <div className="mt-4 border-t border-gray-200 pt-3 text-center">
                <p className="text-[11px] text-gray-500">
                  Trusted by restaurants across India.
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  © 2026 BizBiteNow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
