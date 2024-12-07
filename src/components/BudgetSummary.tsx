import React from 'react';
import type { Budget } from '../types';

interface BudgetSummaryProps {
  budget: Budget;
}

export const BudgetSummary = ({ budget }: BudgetSummaryProps) => {
  return (
    <div className="text-center text-white p-6 pb-8">
      <h3 className="text-lg font-medium mb-2">Budget</h3>
      <h1 className="text-4xl font-bold mb-1">₹ {budget.total.toLocaleString()}</h1>
      <p className="text-sm opacity-75">TOTAL BALANCE</p>
      
      <div className="mt-4 w-full bg-indigo-500/30 rounded-full h-1.5">
        <div 
          className="bg-white h-full rounded-full transition-all duration-500"
          style={{ width: `${(budget.spent / budget.total) * 100}%` }}
        />
      </div>
    </div>
  );
};