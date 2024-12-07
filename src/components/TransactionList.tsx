import React from 'react';
import type { Transaction } from '../types';
import { TransactionItem } from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="bg-white rounded-t-3xl -mx-6 flex-1">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-lg">Recent Transactions</h2>
          <button className="text-cyan-500 text-sm active:text-cyan-600">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};