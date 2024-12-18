import React from 'react';
import { Outlet } from 'react-router-dom';
import { Bookmark, Search, Tag, Settings } from 'lucide-react';
import Navigation from './Navigation';
import Header from './Header';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;