import React from 'react';
import { useBookmarks } from '../hooks/useBookmarks';

const Tags = () => {
  const { bookmarks } = useBookmarks();
  
  const tagCounts = bookmarks.reduce((acc, bookmark) => {
    bookmark.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Tags</h2>
      
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-wrap gap-3">
          {sortedTags.map(([tag, count]) => (
            <div
              key={tag}
              className="flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800"
            >
              <span className="text-sm font-medium">{tag}</span>
              <span className="ml-2 text-xs bg-indigo-200 px-2 py-0.5 rounded-full">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};