import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyProfile, logoutCustomer } from "../../api/customer/authApi";
import { LogOut } from "lucide-react";
import logo from "../../assets/BIZ BITE NOW Icon.png";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getMyProfile()
      .then(setUser)
      .catch(() => navigate("/customer/onboarding", { replace: true }));
  }, [navigate]);

  const handleLogout = async () => {
    await logoutCustomer();
    navigate("/", { replace: true });
  };

  if (!user) return null;

  return (
    <div
      className="min-h-screen bg-[#FAFAF5] flex flex-col items-center justify-center px-5"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="w-16 h-16 rounded-2xl bg-[#E8622D] flex items-center justify-center shadow-md mb-6">
        <img src={logo} alt="BizBiteNow" className="w-10 h-10 object-contain" />
      </div>

      <h1
        className="font-bold text-[#1C1C1C] text-center"
        style={{ fontSize: "26px" }}
      >
        Hi, {user.name.split(" ")[0]} 👋
      </h1>
      <p className="text-gray-500 text-[16px] text-center mt-2">
        Welcome to BizBiteNow
      </p>

      <div className="mt-8 bg-white rounded-2xl shadow-sm w-full max-w-sm p-5 space-y-3">
        <div>
          <p className="text-[14px] text-gray-400 font-semibold">Name</p>
          <p className="text-[16px] text-[#1C1C1C] font-medium mt-0.5">{user.name}</p>
        </div>
        <div className="border-t border-gray-100" />
        <div>
          <p className="text-[14px] text-gray-400 font-semibold">Phone</p>
          <p className="text-[16px] text-[#1C1C1C] font-medium mt-0.5">+91 {user.phone}</p>
        </div>
        {user.address && (
          <>
            <div className="border-t border-gray-100" />
            <div>
              <p className="text-[14px] text-gray-400 font-semibold">Delivery Address</p>
              <p className="text-[16px] text-[#1C1C1C] font-medium mt-0.5">{user.address}</p>
            </div>
          </>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 flex items-center gap-2 text-red-500 font-semibold text-[16px]"
        style={{ minHeight: "44px" }}
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  );
};

export default Profile;
