import React from 'react';
import { Wallet, BarChart2, PieChart, User } from 'lucide-react';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white py-2 px-6 shadow-lg border-t border-gray-100">
      <div className="flex justify-between items-center">
        <NavItem icon={<Wallet className="w-6 h-6" />} label="Wallet" active />
        <NavItem icon={<BarChart2 className="w-6 h-6" />} label="Report" />
        <div className="relative -top-8">
          <button className="bg-indigo-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
            <span className="text-white text-2xl">₹</span>
          </button>
        </div>
        <NavItem icon={<PieChart className="w-6 h-6" />} label="Report" />
        <NavItem icon={<User className="w-6 h-6" />} label="Profile" />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <button className={`flex flex-col items-center gap-1 p-2 ${active ? 'text-indigo-600' : 'text-gray-400'}`}>
    {icon}
    <span className="text-xs">{label}</span>
  </button>
);