import { useState } from 'react';
import type { Transaction } from '../types';

export const useBudget = () => {
  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      name: 'Amazon',
      logo: 'https://logo.clearbit.com/amazon.com',
      amount: 500,
      time: '12:33pm 2-Sep-2020',
      status: 'successful',
      category: 'shopping'
    },
    {
      id: '2',
      name: 'Make My Trip',
      logo: 'https://logo.clearbit.com/makemytrip.com',
      amount: 650,
      time: '11:55pm 2-Sep-2020',
      status: 'failed',
      category: 'travel'
    },
    {
      id: '3',
      name: 'Flipkart',
      logo: 'https://logo.clearbit.com/flipkart.com',
      amount: 995,
      time: '11:00pm 2-Sep-2020',
      status: 'successful',
      category: 'shopping'
    }
  ]);

  const budget = {
    total: 20000,
    spent: 13000,
    remaining: 7000
  };

  return { transactions, budget };
};