import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/branding/BIZ BITE NOW Horizontal Complete.png";
import logo1 from "../../assets/branding/BIZBITENOW Vertical Complete1.png";
import { motion } from "framer-motion";
import { loginSeller } from "../../services/sellerAuth";
const Login = () => {
  const navigate = useNavigate();

  const [showPin, setShowPin] = useState(false);
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginSeller({
        email,
        pin,
      });

      // Save JWT token
      localStorage.setItem("sellerToken", res.data.token);

      // Optional auth flag
      localStorage.setItem("sellerAuth", "true");

      navigate("/seller/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid email or PIN");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("sellerToken");

    if (token) {
      navigate("/seller/dashboard", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#16522d] flex items-center justify-center p-6">
      {/* White Blob */}
      <div
        className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full"
        style={{
          background: "rgba(255,255,255,0.75)",
          filter: "blur(140px)",
        }}
      />

      {/* Yellow Blob */}
      <div
        className="absolute -bottom-56 -left-56 w-[650px] h-[650px] rounded-full"
        style={{
          background: "rgba(255,199,0,0.70)",
          filter: "blur(140px)",
        }}
      />

      {/* Center Green Highlight */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "rgba(255,255,255,0.08)",
          filter: "blur(120px)",
        }}
      />

      {/* Small White Blob */}
      <div
        className="absolute top-24 left-24 w-[280px] h-[280px] rounded-full"
        style={{
          background: "rgba(255,255,255,0.35)",
          filter: "blur(90px)",
        }}
      />

      {/* Small Yellow Blob */}
      <div
        className="absolute bottom-20 right-32 w-[260px] h-[260px] rounded-full"
        style={{
          background: "rgba(255,199,0,0.45)",
          filter: "blur(90px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 80 }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="w-full max-w-7xl"
      >
        <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden bg-white shadow-[0_40px_80px_rgba(22,82,45,0.15)]">
          {/* LEFT PANEL */}

          <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#123524] via-[#18452C] to-[#1A4D2E] text-white p-14 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-400/10 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%)]"></div>
            <div className="relative">
              <img
                src={logo}
                alt="BizBiteNow"
                className="h-20 object-contain rounded-lg shadow-lg"
              />

              <div className="mt-10">
                <span className="inline-flex items-center rounded-full bg-green-500/20 border border-green-400/30 px-4 py-1 text-sm font-medium text-green-100">
                  Seller Portal
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight">
                Welcome Back,
                <br />
                Grow Your Business.
              </h2>

              <p className="mt-6 max-w-md text-green-100 leading-8">
                Manage products, track orders, monitor earnings, and run your
                business efficiently from one secure dashboard.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Manage Products",
                "Track Orders",
                "View Earnings",
                "Real-time Analytics",
                "Secure Seller Access",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
                >
                  <span className="text-green-300">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}

          <div className="bg-white px-8 py-10 md:px-14 flex flex-col justify-center">
            {/* Logo */}

            <div className="text-center mb-10">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-white text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                <img
                  src={logo1}
                  alt="BizBiteNow"
                  className="h-20 object-contain"
                />
              </div>

              <h2 className="mt-6 text-4xl font-bold text-black">
                Welcome Back
              </h2>

              <p className="mt-2 text-black">
                Sign in to access your seller dashboard.
              </p>
            </div>

            {/* FORM STARTS HERE */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seller@example.com"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3.5 pl-12 pr-4 transition-all duration-300 focus:border-[#1A4D2E] focus:ring-4 focus:ring-green-100 outline-none"
                    required
                  />
                </div>
              </div>

              {/* PIN */}

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  PIN
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black-400"
                  />

                  <input
                    type={showPin ? "text" : "password"}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter your PIN"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3.5 pl-12 pr-12 transition-all duration-300 focus:border-[#1A4D2E] focus:ring-4 focus:ring-green-100 outline-none"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-[#1A4D2E]"
                  >
                    {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Forgot PIN */}

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-[#1A4D2E] hover:underline"
                >
                  Forgot PIN?
                </button>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] py-3.5 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Login
              </button>
            </form>

            <div className="mt-10 border-t pt-6 text-center">
              <p className="text-sm text-black">
                Don't have a seller account?
              </p>

              <button
                onClick={() => navigate("/seller/register")}
                className="mt-2 text-sm font-medium text-[#1A4D2E] hover:underline"
              >
                Register
              </button>

              <p className="mt-6 text-xs text-black-400">
                © 2026 BizBiteNow. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
