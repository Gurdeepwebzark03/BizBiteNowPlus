import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/axios';

function RegisterSeller() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  
  // 🚀 Exactly matching your backend destructuring fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    business_name: '',
    role: 'Seller', // <-- Required by backend
    pin: '',        // <-- Backend looks for pin, not password!
    address: '',
    city: 'Bareilly',
    state: 'Uttar Pradesh', // <-- Required by backend
    tier: 'Plus'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      // 🌐 Hit Backend Router Node Matrix
      const response = await API.post('/seller/register', formData);
      
      // ⚠️ SABSE IMPORTANT: Ye pura validation check try block ke ANDAR hi hona chahiye!
      if (response && response.data && response.data.token && response.data.seller) {
        
        // 🔑 1. Token cache layer initialization
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.seller));
        
        // 📊 2. React Global Context Authentication Sync
        login(response.data.seller, response.data.token); 
        
        // 🚀 3. Instant auto-login dashboard deployment
        navigate('/seller-dashboard'); 
      }
    } catch (err) {
      console.error("Signup error details:", err);
      setErrorMsg(err.response?.data?.message || 'Auto-Registration handshake pipeline failed.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-xs font-sans text-slate-300">
      <form onSubmit={handleSignUpSubmit} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-full max-w-md space-y-4 shadow-2xl">
        <div>
          <h2 className="text-lg font-black text-white uppercase tracking-tight">Register Live Store Node</h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Database Integration Verification</p>
        </div>
        
        {errorMsg && (
          <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold rounded-xl text-center">
            ⚠️ {errorMsg}
          </div>
        )}
        
        <div className="space-y-3">
          <div>
            <label className="text-[10px] uppercase text-slate-400 font-extrabold block mb-1">Owner Name</label>
            <input type="text" name="name" required placeholder="Shresth Saxena" value={formData.name} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-medium" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] uppercase text-slate-400 font-extrabold block mb-1">Real Email Address</label>
              <input type="email" name="email" required placeholder="name@domain.com" value={formData.email} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-medium" />
            </div>
            <div>
              <label className="text-[10px] uppercase text-slate-400 font-extrabold block mb-1">10-Digit Phone</label>
              <input type="tel" name="phoneNumber" required placeholder="9876543210" value={formData.phoneNumber} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-mono" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] uppercase text-slate-400 font-extrabold block mb-1">Store / Cafe Brand Name</label>
              <input type="text" name="business_name" required placeholder="Saxena Villa Homestay" value={formData.business_name} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-medium" />
            </div>
            <div>
              <label className="text-[10px] uppercase text-slate-400 font-extrabold block mb-1">Security PIN (4+ Digits)</label>
              <input type="password" name="pin" required placeholder="••••" value={formData.pin} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-mono font-bold tracking-widest" />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase text-slate-400 font-extrabold block mb-1">Complete Physical Address</label>
            <input type="text" name="address" required placeholder="Palia Kalan, Near Station Road" value={formData.address} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-medium" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] uppercase text-slate-400 font-extrabold block mb-1">City</label>
              <input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-medium" />
            </div>
            <div>
              <label className="text-[10px] uppercase text-slate-400 font-extrabold block mb-1">State</label>
              <input type="text" name="state" required value={formData.state} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-medium" />
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-[#059669] text-white font-black py-3.5 rounded-xl tracking-wider uppercase transition hover:bg-[#047857] shadow-lg mt-2 cursor-pointer">
          Register Store & Generate Token Node
        </button>
      </form>
    </div>
  );
}

export { RegisterSeller };