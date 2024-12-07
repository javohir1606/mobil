import React from 'react';
import type { Transaction } from '../types';

export const TransactionItem = ({ logo, name, time, amount, status }: Transaction) => {
  return (
    <div className="flex items-center justify-between py-3 active:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
          <img 
            src={logo} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/48';
            }}
          />
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <div className={`text-right ${status === 'successful' ? 'text-cyan-500' : 'text-red-500'}`}>
        <p className="font-medium">₹ {amount}</p>
        <p className="text-xs capitalize">{status}</p>
      </div>
    </div>
  );
};