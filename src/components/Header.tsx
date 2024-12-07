import React from 'react';
import { Menu, Bell, MoreVertical } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-indigo-600">
      <div className="flex justify-between items-center p-4">
        <button className="p-2 hover:bg-indigo-700 rounded-full transition-colors">
          <Menu className="w-6 h-6 text-white" />
        </button>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-indigo-700 rounded-full transition-colors">
            <Bell className="w-6 h-6 text-white" />
          </button>
          <button className="p-2 hover:bg-indigo-700 rounded-full transition-colors">
            <MoreVertical className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};