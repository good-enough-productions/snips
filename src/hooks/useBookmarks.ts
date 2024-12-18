import { useState, useEffect } from 'react';
import { Bookmark } from '../types/bookmark';
import { loadBookmarks, saveBookmark } from '../utils/storage';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInitialBookmarks = async () => {
      const loaded = await loadBookmarks();
      setBookmarks(loaded);
      setIsLoading(false);
    };

    loadInitialBookmarks();
  }, []);

  const addBookmark = async (bookmark: Bookmark) => {
    const updated = await saveBookmark(bookmark);
    setBookmarks(prev => [...prev, updated]);
    return updated;
  };

  return {
    bookmarks,
    isLoading,
    addBookmark
  };
}