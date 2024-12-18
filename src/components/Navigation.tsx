import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Bookmark, Tag, Search } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Bookmark, label: 'Bookmarks', to: '/bookmarks' },
    { icon: Tag, label: 'Tags', to: '/tags' },
    { icon: Search, label: 'Search', to: '/search' },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around">
          {navItems.map(({ icon: Icon, label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center py-2 px-3 text-sm ${
                  isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'
                }`
              }
            >
              <Icon className="h-6 w-6" />
              <span className="mt-1">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;