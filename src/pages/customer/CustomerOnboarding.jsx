import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader2, ArrowRight } from "lucide-react";
import { sendOtp, verifyOtp, saveProfile } from "../../api/customer/authApi";
import logoHorizontal from "../../assets/bizbite_logo_horizontal.png";

const LeftPanel = () => (
  <div
    className="hidden md:flex flex-col items-center justify-center shrink-0 px-12"
    style={{ backgroundColor: "#E8622D", width: "420px" }}
  >
    <img
      src={logoHorizontal}
      alt="BizBiteNow"
      className="w-full max-w-[220px] h-auto object-contain rounded-xl mb-8"
    />
    <h2
      className="text-white font-bold text-center"
      style={{ fontSize: "44px", lineHeight: "1.1" }}
    >
      Order Local.
      <br />
      <span style={{ color: "#F4A300" }}>Eat Fresh.</span>
    </h2>
  </div>
);

const CustomerOnboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/storefront";
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  // ─── STEP 1: Send OTP ───────────────────────────────────────
  const handleSendOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await sendOtp(phone.trim());
      setStep(2);
    } catch (err) {
      setError(err.message || "Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ─── STEP 2: Verify OTP ─────────────────────────────────────
  const handleOtpChange = (val, index) => {
    if (!/^\d?$/.test(val)) return;
    const updated = [...otp];
    updated[index] = val;
    setOtp(updated);
    setError("");
    if (val && index < 3) otpRefs[index + 1].current?.focus();
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpValue = otp.join("");
    if (otpValue.length < 4) {
      setError("Enter the 4-digit OTP");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await verifyOtp(phone.trim(), otpValue);
      if (res.isNewUser) {
        setStep(3);
      } else {
        navigate(redirectTo, { replace: true });
      }
    } catch (err) {
      setError(err.message || "Invalid OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ─── STEP 3: Save Profile ────────────────────────────────────
  const handleSaveProfile = async () => {
    if (!name.trim()) { setError("Name is required"); return; }
    if (!address.trim()) { setError("Delivery address is required"); return; }
    setLoading(true);
    setError("");
    try {
      await saveProfile(name, address, phone);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <LeftPanel />

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-[#FAFAF5] flex items-center justify-center px-6 py-10">

        {/* STEP 1 — Phone Entry */}
        {step === 1 && (
          <div className="bg-white rounded-3xl shadow-sm p-8 w-full max-w-sm">
            <h1
              className="font-bold text-[#1C1C1C] mb-1"
              style={{ fontSize: "30px" }}
            >
              Welcome!
            </h1>
            <p className="text-gray-500 text-[16px] mb-1">
              Enter your number to continue.
            </p>
            <p className="text-gray-400 mb-6" style={{ fontSize: "13px" }}>
              * Type 9999999999 to test existing user flow
            </p>

            {error && (
              <p className="text-red-500 text-[16px] mb-3">{error}</p>
            )}

            <div
              className="flex items-center border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white"
              style={{ minHeight: "52px" }}
            >
              <span
                className="px-4 text-[#1C1C1C] font-semibold text-[16px] border-r border-gray-200 shrink-0 flex items-center"
                style={{ minHeight: "52px" }}
              >
                +91
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                  setError("");
                }}
                placeholder="Mobile Number"
                className="flex-1 px-4 outline-none text-[16px] text-[#1C1C1C] placeholder-gray-400 bg-white"
                style={{ fontFamily: "Arial, sans-serif" }}
                onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
              />
            </div>

            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-opacity"
              style={{
                backgroundColor: "#E8622D",
                minHeight: "52px",
                fontSize: "17px",
                opacity: loading ? 0.8 : 1,
              }}
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>Continue <ArrowRight size={16} /></>
              )}
            </button>
          </div>
        )}

        {/* STEP 2 — OTP Verify */}
        {step === 2 && (
          <div className="bg-white rounded-3xl shadow-sm p-8 w-full max-w-sm">
            <h1
              className="font-bold text-[#1C1C1C] mb-1"
              style={{ fontSize: "30px" }}
            >
              Verify OTP
            </h1>
            <p className="text-gray-500 text-[16px] mb-6">
              Code sent to{" "}
              <span className="font-semibold text-[#1C1C1C]">
                +91 {phone}
              </span>
            </p>

            {error && (
              <p className="text-red-500 text-[16px] mb-3">{error}</p>
            )}

            <div className="flex gap-3 mb-6 justify-center">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={otpRefs[i]}
                  type="tel"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  onKeyDown={(e) => handleOtpKeyDown(e, i)}
                  className="border border-gray-200 rounded-xl text-center font-bold text-[#1C1C1C] outline-none focus:border-[#E8622D] transition-colors"
                  style={{
                    width: "60px",
                    height: "60px",
                    fontSize: "24px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              className="w-full font-bold rounded-xl flex items-center justify-center gap-2 transition-opacity"
              style={{
                backgroundColor: "#F4A300",
                color: "#1C1C1C",
                minHeight: "52px",
                fontSize: "17px",
                opacity: loading ? 0.8 : 1,
              }}
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                "Verify"
              )}
            </button>

            <button
              onClick={() => { setStep(1); setOtp(["", "", "", ""]); setError(""); }}
              className="w-full text-gray-400 text-[16px] mt-3 font-medium"
              style={{ minHeight: "44px" }}
            >
              Change Number
            </button>
          </div>
        )}

        {/* STEP 3 — Profile Setup */}
        {step === 3 && (
          <div className="bg-white rounded-3xl shadow-sm p-8 w-full max-w-sm">
            <span
              className="inline-block text-[14px] font-bold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "#ffedd5", color: "#E8622D" }}
            >
              NUMBER VERIFIED ✓
            </span>

            <h1
              className="font-bold text-[#1C1C1C] mb-1"
              style={{ fontSize: "30px" }}
            >
              Almost there!
            </h1>
            <p className="text-gray-500 text-[16px] mb-6">
              Tell us where to deliver your order.
            </p>

            {error && (
              <p className="text-red-500 text-[16px] mb-3">{error}</p>
            )}

            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(""); }}
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-xl px-4 text-[16px] text-[#1C1C1C] outline-none focus:border-[#E8622D] transition-colors mb-3"
              style={{
                minHeight: "52px",
                fontFamily: "Arial, sans-serif",
              }}
            />

            <textarea
              value={address}
              onChange={(e) => { setAddress(e.target.value); setError(""); }}
              placeholder="Complete Delivery Address (Flat, Wing, Area)"
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] text-[#1C1C1C] outline-none resize-none focus:border-[#E8622D] transition-colors mb-4"
              style={{ fontFamily: "Arial, sans-serif" }}
            />

            <button
              onClick={handleSaveProfile}
              disabled={loading}
              className="w-full text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-opacity"
              style={{
                backgroundColor: "#E8622D",
                minHeight: "52px",
                fontSize: "17px",
                opacity: loading ? 0.8 : 1,
              }}
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>Start Ordering <ArrowRight size={16} /></>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CustomerOnboarding;
