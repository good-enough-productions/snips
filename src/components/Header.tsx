import React from 'react';
import { Bookmark, Search, Settings } from 'lucide-react';
import IconButton from './ui/IconButton';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Bookmark className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-900">Bookmarker</h1>
          </div>
          <div className="flex items-center space-x-4">
            <IconButton icon={Search} label="Search" />
            <IconButton icon={Settings} label="Settings" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;