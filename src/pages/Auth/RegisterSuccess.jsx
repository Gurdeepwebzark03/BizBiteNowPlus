import React from 'react';
import { CheckCircle2, ArrowRight, Store, ShieldCheck, HelpCircle } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-0 md:p-6">
      {/* Main Card Wrapper - Laptop me 12-columns grid, Phone me normal vertical stack */}
      <div className="bg-white w-full max-w-5xl min-h-[75vh] rounded-none md:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT PANEL: Laptop par dikhega, Phone par automatic hide ho jayega (hidden lg:flex) */}
        <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-12 flex-col justify-between relative overflow-hidden text-white border-r border-slate-800">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
          
          <div>
            <span className="text-2xl font-black tracking-tight">
              BizbitsNow<span className="text-emerald-400">PLUS</span>
            </span>
            <p className="text-xs text-slate-400 mt-1">Infrastructure Verification Layer</p>
          </div>

          <div className="space-y-6 my-auto">
            <h3 className="text-2xl font-bold tracking-tight text-slate-200">What happens next?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white/5 rounded-lg text-emerald-400"><Store size={16} /></div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-200">Storefront Allocation</h4>
                  <p className="text-[11px] text-slate-400">Your unique Merchant Identity is generated and synced with DB.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white/5 rounded-lg text-indigo-400"><ShieldCheck size={16} /></div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-200">6-Digit Access Token</h4>
                  <p className="text-[11px] text-slate-400">Your security PIN has been encrypted with hash salts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            &copy; 2026 BizbitsNow Security.
          </div>
        </div>

        {/* RIGHT PANEL: Success Content (Phone and Laptop Dono ke liye tailored) */}
        <div className="col-span-1 lg:col-span-7 p-6 sm:p-12 md:p-16 flex flex-col justify-center items-center bg-slate-50/30 text-center">
          <div className="w-full max-w-md mx-auto space-y-8 flex flex-col items-center">
            
            {/* Animated Success Check Icon */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-emerald-100 rounded-full animate-ping opacity-25"></div>
              <div className="relative p-4 bg-emerald-50 rounded-full text-emerald-500 border border-emerald-200">
                <CheckCircle2 size={56} className="stroke-[1.5]" />
              </div>
            </div>

            {/* Typography Response Texts with Hardcoded slate colors */}
            <div className="space-y-3">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                System Activated
              </span>
              <h1 className="text-3xl font-black tracking-tight" style={{ color: '#0f172a' }}>
                Account Ready!
              </h1>
              <p className="text-sm font-medium text-slate-500 px-2 leading-relaxed">
                Congratulations, your onboarding response has been securely saved. Your merchant infrastructure is fully active.
              </p>
            </div>

            {/* Dynamic Status Badges Info Box */}
            <div className="w-full bg-white border border-slate-200/60 p-4 rounded-2xl shadow-sm text-left space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Connection Status</span>
                <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">LIVE / ONLINE</span>
              </div>
              <div className="h-px bg-slate-100 w-full"></div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Database Node</span>
                <span className="text-slate-700 font-mono font-semibold">Cluster-0_Main</span>
              </div>
            </div>

            {/* Call To Action Button */}
            <button 
              onClick={() => navigate('/login')}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 rounded-xl transition duration-200 flex items-center justify-center space-x-2 shadow-lg group cursor-pointer text-sm"
            >
              <span>Proceed to Login Portal</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Bottom Support Link */}
            <div className="flex items-center space-x-1 text-xs text-slate-400 font-medium pt-2">
              <HelpCircle size={14} />
              <span>Facing login issues?</span>
              <Link to="/support" className="text-indigo-600 hover:underline font-semibold ml-1">Contact DevOps</Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}