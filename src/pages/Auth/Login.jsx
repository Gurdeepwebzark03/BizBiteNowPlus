import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, KeyRound } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import logoHorizontal from '../../assets/bizbite_logo_horizontal.png';
import { useAuth } from '../../context/AuthContext';
import API from '../../api/axios';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 🚀 Backend structural mapping properties
  const [formData, setFormData] = useState({
    email: '',
    pin: '',
    fcm_token: null // Optional secure property backend looks for
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 🌐 Live hitting: http://localhost:3000/api/seller/login
      const response = await API.post('/seller/login', {
        email: formData.email,
        pin: formData.pin,
        fcm_token: formData.fcm_token
      });
      
      if (response.data.token && response.data.seller) {
        // 🔑 Pipeline synchronization
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.seller));
        
        // Context configuration lock
        login(response.data.seller, response.data.token);
        
        setLoading(false);
        navigate('/seller-dashboard');
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Invalid Credentials! Access Gateway pipeline declined.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center m-0 p-0 overflow-x-hidden">
      <div className="bg-white w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 m-0 p-0">
        
        {/* LEFT SIDE: Brand Identity Banner */}
        <div className="hidden lg:flex lg:col-span-4 bg-gradient-to-br from-[#0c2e19] via-[#16522d] to-slate-950 p-12 flex-col justify-between relative overflow-hidden text-white border-r border-slate-800">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#ffc700]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-2">
            <img src={logoHorizontal} alt="BIZBITE NOW Logo" className="w-full max-w-[220px] h-auto object-contain rounded-xl" />
            <p className="text-[11px] text-slate-300 font-medium tracking-wide pl-1">Console Gateway Layer v1.0</p>
          </div>

          <div className="relative z-10 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm my-auto space-y-2">
            <div className="flex items-center space-x-2 text-[#ffc700] mb-1">
              <KeyRound size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Independent Platform</span>
            </div>
            <h3 className="text-sm font-bold text-slate-100">Own Your Infrastructure</h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Giving independent food business owners back their direct customer data control power.
            </p>
          </div>

          <div className="relative z-10 text-[11px] text-slate-400 font-medium">
            &copy; 2026 BIZBITENOW Operating Group.
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Login Panel */}
        <div className="col-span-1 lg:col-span-8 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-slate-50/50">
          <div className="w-full max-w-sm mx-auto space-y-6">
            
            <div>
              <div className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2"
                style={{ backgroundColor: '#e1ebe4', color: '#16522d' }}>
                Merchant Gateway Access
              </div>
              <h1 className="text-4xl font-black tracking-tight" style={{ color: '#16522d' }}>
                Console Login
              </h1>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Tired of paying 30% commission? Manage your empire.
              </p>
            </div>

            {error && (
              <div className="p-4 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl text-sm text-center font-semibold animate-pulse">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Registered Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 text-black-400" size={16} />
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    style={{ color: '#0f172a' }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#16522d] outline-none text-sm bg-white" 
                    placeholder="seller@bizbitenow.com" 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Security Access PIN</label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 text-black-400" size={16} />
                  <input 
                    type="password" 
                    name="pin" 
                    required 
                    maxLength={6}
                    value={formData.pin} 
                    onChange={handleChange} 
                    style={{ color: '#0f172a' }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#16522d] outline-none text-sm bg-white font-mono tracking-widest" 
                    placeholder="••••••" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{ backgroundColor: '#16522d' }}
                className="w-full text-white font-semibold py-3.5 rounded-xl transition duration-200 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 mt-2 group cursor-pointer text-sm hover:opacity-90"
              >
                <span>{loading ? 'Verifying Gateway...' : 'Sign In To Panel'}</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="text-center text-sm text-slate-500 font-medium pt-2 border-t border-slate-100">
              New food business? <Link to="/register/seller" className="font-bold hover:underline" style={{ color: '#16522d' }}>Onboard Shop</Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}