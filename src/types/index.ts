export interface Transaction {
  id: string;
  name: string;
  logo: string;
  amount: number;
  time: string;
  status: 'successful' | 'failed';
  category: 'shopping' | 'travel' | 'food' | 'entertainment';
}

export interface Budget {
  total: number;
  spent: number;
  remaining: number;
}