import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import BookmarkList from '../components/bookmarks/BookmarkList';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search bookmarks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <BookmarkList filter={query} />
    </div>
  );
};

export default Search;