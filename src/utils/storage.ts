import { Bookmark, BookmarkFormData } from '../types/bookmark';
import { STORAGE_KEYS } from '../constants';

export async function loadBookmarks(): Promise<Bookmark[]> {
  const stored = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
  if (!stored) return [];
  
  try {
    const parsed = JSON.parse(stored);
    return parsed.map((bookmark: any) => ({
      ...bookmark,
      createdAt: new Date(bookmark.createdAt),
      updatedAt: new Date(bookmark.updatedAt)
    }));
  } catch (error) {
    console.error('Error loading bookmarks:', error);
    return [];
  }
}

export async function saveBookmark(data: BookmarkFormData): Promise<Bookmark> {
  const bookmarks = await loadBookmarks();
  
  const newBookmark: Bookmark = {
    id: crypto.randomUUID(),
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'local'
  };

  const updated = [...bookmarks, newBookmark];
  localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  
  return newBookmark;
}