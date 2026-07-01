// src/components/Shared/DashboardLayout.jsx
import React, { useState } from 'react';
import { LayoutDashboard, Wallet, Settings, Menu, X, Bell } from 'lucide-react';

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20} /> },
    { name: 'Transactions', icon: <Wallet size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white w-64 p-4 flex flex-col space-y-6 transition-all ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex justify-between items-center px-2">
          <h1 className="text-xl font-bold tracking-wider text-emerald-400">BizbitsNow+</h1>
          <button className="md:hidden" onClick={() => setIsOpen(false)}><X size={20} /></button>
        </div>
        
        <nav className="flex-1 space-y-2">
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-slate-800 transition duration-200">
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navbar */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 border-b border-gray-100">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <Menu size={24} />
          </button>
          <div className="flex items-center space-x-4">
            <Bell size={20} className="text-gray-500 cursor-pointer hover:text-gray-700" />
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
              U
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}