import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import BookmarkCard from './BookmarkCard';
import { Bookmark } from '../../types/bookmark';
import { useBookmarks } from '../../hooks/useBookmarks';

interface BookmarkListProps {
  filter?: string;
  tag?: string;
}

const BookmarkList = ({ filter, tag }: BookmarkListProps) => {
  const { bookmarks, isLoading } = useBookmarks();

  const filteredBookmarks = bookmarks
    .filter(bookmark => {
      if (tag) {
        return bookmark.tags.includes(tag);
      }
      if (filter) {
        return (
          bookmark.title.toLowerCase().includes(filter.toLowerCase()) ||
          bookmark.description?.toLowerCase().includes(filter.toLowerCase()) ||
          bookmark.tags.some(t => t.includes(filter.toLowerCase()))
        );
      }
      return true;
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredBookmarks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No bookmarks found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredBookmarks.map((bookmark) => (
        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default BookmarkList;