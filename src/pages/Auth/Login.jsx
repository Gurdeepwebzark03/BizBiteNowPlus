import React, { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logoHorizontal from "../../assets/bizbite_logo_horizontal.png";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPin, setShowPin] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    pin: "",
    fcm_token: null,
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
  setLoading(true);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const mockSeller = {
    id: 1,
    name: "Gurdeep Singh",
    role: "Plus Seller",
    email: formData.email,
  };

  const mockToken = "mock_seller_token";

  localStorage.setItem("token", mockToken);
  localStorage.setItem("user", JSON.stringify(mockSeller));

  login(mockSeller, mockToken);

  setLoading(false);

  navigate("/seller/dashboard");
};

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#0b2b18] via-[#16522d] to-[#07140d]">
     
      {/* Decorative Background */}

      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#ffc700]/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

      <div className="relative z-10 flex h-full items-center justify-center px-6 py-4">
        
                              <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 80 }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="w-full max-w-6xl"
      >
        {/* Main Card */}

        <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden  shadow-[0_40px_80px_rgba(22,82,45,0.15)]">
          {/* LEFT PANEL */}


          {/* LEFT PANEL */}
         

          <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#16522d] via-[#124325] to-[#08160e] p-8 text-white">

            <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-[#ffc700]/10 blur-3xl"></div>

            <div className="relative z-10">

              <img
                src={logoHorizontal}
                alt="BizBiteNow"
                className="h-10 object-contain"
              />

              <span className="mt-5 inline-flex rounded-full bg-[#ffc700] px-4 py-1.5 text-xs font-bold text-[#16522d]">
                Plus Seller Dashboard
              </span>

              <h1 className="mt-5 text-[2rem]  leading-tight text-white">
                Grow Your
                <br />
                Restaurant
                <br />
                Business
              </h1>

              <p className="mt-3 max-w-sm text-base leading-6 text-green-100">

                Manage orders, menus, revenue,
                customers and analytics from one
                beautiful dashboard.

              </p>

            </div>

            {/* Features */}

            <div className="relative z-10 text-left space-y-3">

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffc700] font-black text-[#16522d]">
                  ✓
                </div>

                <div>

                  <h3 className="font-semibold">
                    Live Orders
                  </h3>

                  <p className="text-xs text-green-100">
                    Real-time order management.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffc700] font-black text-[#16522d]">
                  ✓
                </div>

                <div>

                  <h3 className="font-semibold">
                    Revenue Insights
                  </h3>

                  <p className="text-xs text-green-100">
                    Daily business analytics.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffc700] font-black text-[#16522d]">
                  ✓
                </div>

                <div>

                  <h3 className="font-semibold">
                    Secure Platform
                  </h3>

                  <p className="text-xs text-green-100">
                    Enterprise-grade protection.
                  </p>

                </div>

              </div>

            </div>

          </div>

          
          {/* RIGHT PANEL */}
        

          <div className="flex items-center justify-center bg-white px-10 py-6">

            <div className="w-full max-w-lg">

              {/* Mobile Logo */}

              <div className="mb-5 flex justify-center lg:hidden">

                <img
                  src={logoHorizontal}
                  alt="BizBiteNow"
                  className="h-10"
                />

              </div>

              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">BizbitsNow<span className="text-emerald-500">PLUS</span></h1>

              <h2 className="mt-4 text-3xl font-black text-[#16522d]">
                Welcome Back
              </h2>

              <p className="mt-1 text-gray-500 leading-6">
                Sign in to manage your restaurant,
                orders and customers.
              </p>

                            {/* ================= ERROR ================= */}

              {error && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* ================= EMAIL ================= */}

                <div >

                  <label className="mb-2 block w-full text-left text-sm font-semibold text-[#16522d]">
                    Email Address
                  </label>

                  <div className="group flex items-center rounded-xl border border-gray-200 bg-white px-4 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-4 focus-within:ring-[#16522d]/10">

                    <Mail
                      size={18}
                      className="text-gray-400 transition group-focus-within:text-[#16522d]"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seller@bizbitenow.com"
                      className="w-full bg-transparent px-4 py-2 text-[#16522d] outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>

                {/* ================= PIN ================= */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-sm font-semibold text-[#16522d]">
                      Security PIN
                    </label>

                    <button
                      type="button"
                      className="text-xs font-semibold text-[#16522d] transition hover:text-[#ffc700]"
                    >
                      Forgot PIN?
                    </button>

                  </div>

                  <div className="group flex items-center rounded-xl border border-gray-200 bg-white px-4 transition-all duration-300 focus-within:border-[#16522d] focus-within:ring-4 focus-within:ring-[#16522d]/10">

                    <Lock
                      size={18}
                      className="text-gray-400 transition group-focus-within:text-[#16522d]"
                    />

                    <input
                      type={showPin ? "text" : "password"}
                      name="pin"
                      required
                      maxLength={4}
                      value={formData.pin}
                      onChange={handleChange}
                      placeholder="••••"
                      className="w-full bg-transparent px-4 py-2 font-mono tracking-[0.35em] text-[#16522d] outline-none placeholder:text-gray-400"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPin(!showPin)}
                      className="text-xs font-semibold text-[#16522d] transition hover:text-[#ffc700]"
                    >
                      {showPin ? "Hide" : "Show"}
                    </button>

                  </div>

                </div>

                {/* ================= OPTIONS ================= */}

                <div className="flex items-center justify-between">

                  <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">

                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#16522d]"
                    />

                    Remember Me

                  </label>

                  <button
                    type="button"
                    className="text-sm font-semibold text-[#16522d] transition hover:text-[#ffc700]"
                  >
                    Need Help?
                  </button>

                </div>

                {/* ================= LOGIN BUTTON ================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#16522d] py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#1d6438] disabled:cursor-not-allowed disabled:opacity-70"
                >

                  {loading ? (
                    <>

                      <svg
                        className="h-5 w-5 animate-spin"
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

                      <span>Authenticating...</span>

                    </>
                  ) : (
                    <>

                      <span>Access Seller Dashboard</span>

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </>
                  )}

                </button>

              </form>

           
                            {/* ================= DIVIDER ================= */}

              <div className="my-5 flex items-center gap-3">

                <div className="h-px flex-1 bg-gray-200"></div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  New Seller?
                </span>

                <div className="h-px flex-1 bg-gray-200"></div>

              </div>

              {/* ================= REGISTER BUTTON ================= */}

              <Link
                to="/seller/register"
                className="group flex w-full items-center justify-center rounded-lg border border-[#16522d] py-2.5 text-sm font-semibold text-[#16522d] transition-all duration-300 hover:bg-[#16522d] hover:text-white"
              >
                Create Seller Account

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* ================= TRUST BADGES ================= */}

              <div className="mt-6 flex justify-between gap-3">

                <div className="flex-1 rounded-xl bg-[#16522d]/5 p-3 text-center">

                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#16522d]/10 text-lg">
                    🔒
                  </div>

                  <p className="mt-2 text-[11px] font-semibold text-[#16522d]">
                    Secure
                  </p>

                </div>

                <div className="flex-1 rounded-xl bg-[#ffc700]/10 p-3 text-center">

                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#ffc700]/20 text-lg">
                    ⚡
                  </div>

                  <p className="mt-2 text-[11px] font-semibold text-[#16522d]">
                    Fast
                  </p>

                </div>

                <div className="flex-1 rounded-xl bg-[#16522d]/5 p-3 text-center">

                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#16522d]/10 text-lg">
                    📈
                  </div>

                  <p className="mt-2 text-[11px] font-semibold text-[#16522d]">
                    Growth
                  </p>

                </div>

              </div>

              {/* ================= FOOTER ================= */}

              <div className="mt-6 border-t border-gray-200 pt-4 text-center">

                <p className="text-xs text-gray-500">
                  Built for independent restaurants.
                </p>

                <p className="mt-1 text-[11px] text-gray-400">
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