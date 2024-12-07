import React from 'react';

interface BudgetCardProps {
  title: string;
  amount: number;
  subtitle: string;
  icon: React.ReactNode;
}

export const BudgetCard = ({ title, amount, subtitle, icon }: BudgetCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg active:scale-95 transition-transform touch-none">
      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mb-3">
        {icon}
      </div>
      <div>
        <p className="text-gray-600 text-sm mb-1">{title}</p>
        <p className="text-xl font-bold mb-0.5">₹ {amount.toLocaleString()}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};