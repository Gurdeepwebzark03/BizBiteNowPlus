import {
  User,
  Mail,
  Phone,
  Building2,
  Image,
  Lock,
  Eye,
  EyeOff,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOTP, registerSeller } from "../../services/sellerAuth";
import logo from "../../assets/branding/BIZ BITE NOW Horizontal Complete.png";
import logo1 from "../../assets/branding/BIZBITENOW Vertical Complete1.png";
import { motion } from "framer-motion";
const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [form, setForm] = useState({
    shopName: "",
    email: "",
    pin: "",
    logo: null,
    brandColor: "#1A4D2E",
    banner: null,
  });

  const [logoPreview, setLogoPreview] = useState("");
  const [bannerPreview, setBannerPreview] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    try {
      await registerSeller(form);

      setShowOTPModal(true);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
    }
  };
  const inputStyle =
    "w-full rounded-xl border border-gray-300 bg-gray-50 py-3.5 pl-12 pr-4 outline-none transition-all duration-300 focus:border-[#1A4D2E] focus:ring-4 focus:ring-green-100";
  const handleVerifyOTP = async () => {
    try {
      const res = await verifyOTP(form.email, otp);

      localStorage.setItem("sellerAuth", "true");

      if (res.data.token) {
        localStorage.setItem("sellerToken", res.data.token);
      }

      setShowOTPModal(false);

      navigate("/seller/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
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
      {showOTPModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center">Verify OTP</h2>

            <p className="mt-3 text-center text-black">
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
        <div className="w-full max-w-7xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,.35)]">
          {/* LEFT */}

          <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#123524] via-[#18452C] to-[#1A4D2E] text-white p-14 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

            <div>
              <img
                src={logo}
                alt="BizBiteNow"
                className="h-20 object-contain"
              />

              <span className="inline-flex mt-10 rounded-full bg-green-500/20 border border-green-400/30 px-4 py-1">
                Seller Registration
              </span>

              <h2 className="mt-8 text-4xl font-bold">
                Become a
                <br />
                BizBiteNow Seller
              </h2>

              <p className="mt-6 text-green-100 leading-8">
                Join thousands of food businesses using BizBiteNow to manage
                products, receive online orders and grow faster.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Receive Online Orders",
                "Manage Products",
                "Track Sales",
                "Real-time Analytics",
                "Secure Dashboard",
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

          {/* RIGHT */}

          <div className="bg-white px-8 py-7 md:px-10 md:py-8 flex flex-col justify-center">
            <div className="text-center mb-4">
              <img
                src={logo1}
                alt="BizBiteNow"
                className="h-20 mx-auto object-contain"
              />

              <h2 className="mt-3 text-3xl font-bold">Create Seller Account</h2>

              <p className="text-black mt-1 text-sm">
                Fill in your business details.
              </p>
            </div>

            <form
              onSubmit={handleRegister}
              className="grid md:grid-cols-2 gap-3"
            >
              <div className="relative">
                <Building2
                  className="absolute left-4 top-4 text-black-400"
                  size={20}
                />
                <input
                  name="shopName"
                  placeholder="Shop Name"
                  className={inputStyle}
                  value={form.shopName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-4 text-black-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  className={inputStyle}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="relative">
                <Lock
                  className="absolute left-4 top-4 text-black-400"
                  size={20}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="pin"
                  placeholder="Password"
                  className={inputStyle}
                  value={form.pin}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="relative">
                <Image
                  className="absolute left-4 top-4 text-black-400"
                  size={20}
                />

                <label
                  className={`${inputStyle} flex cursor-pointer items-center justify-between`}
                >
                  <span className="truncate text-black pl-0">
                    {form.logo ? form.logo.name : "Upload Logo"}
                  </span>

                  <span className="rounded-lg bg-[#1A4D2E] px-3 py-1 text-xs font-medium text-white">
                    Browse
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (!file) return;

                      setForm({
                        ...form,
                        logo: file,
                      });

                      setLogoPreview(URL.createObjectURL(file));
                    }}
                  />
                </label>

                {logoPreview && (
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="mt-3 h-20 w-20 rounded-xl border border-gray-200 object-cover shadow-sm"
                  />
                )}
              </div>
              <div className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 flex items-center justify-between">
                <span className="text-black font-medium">Brand Color</span>

                <input
                  type="color"
                  name="brandColor"
                  value={form.brandColor}
                  onChange={handleChange}
                  className="h-10 w-16 cursor-pointer rounded-lg border"
                />
              </div>
              <div className="relative md:col-span-2">
                <Image
                  className="absolute left-4 top-4 text-black-400"
                  size={20}
                />

                <label
                  className={`${inputStyle} flex cursor-pointer items-center justify-between`}
                >
                  <span className="truncate text-black pl-8">
                    {form.banner ? form.banner.name : "Upload Banner Image"}
                  </span>

                  <span className="rounded-lg bg-[#1A4D2E] px-3 py-1 text-xs font-medium text-white">
                    Browse
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (!file) return;

                      setForm({
                        ...form,
                        banner: file,
                      });

                      setBannerPreview(URL.createObjectURL(file));
                    }}
                  />
                </label>

                {bannerPreview && (
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="mt-3 h-40 w-full rounded-xl border border-gray-200 object-cover shadow-sm"
                  />
                )}
              </div>

              <label className="md:col-span-2 flex items-center gap-3 text-sm cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="h-4 w-4 accent-[#16522d] cursor-pointer"
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="font-medium text-[#16522d] hover:underline"
                  >
                    Terms & Conditions
                  </button>
                </span>
              </label>

              <button
                type="submit"
                className="md:col-span-2 w-full rounded-xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] py-3.5 font-semibold text-white hover:-translate-y-0.5 transition"
              >
                Create Seller Account
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-black">Already have an account?</p>

              <button
                onClick={() => navigate("/seller/login")}
                className="mt-2 text-[#1A4D2E] font-semibold hover:underline"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
