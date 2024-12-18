import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import CreateBookmarkModal from '../components/bookmarks/CreateBookmarkModal';
import BookmarkList from '../components/bookmarks/BookmarkList';
import { BookmarkFormData } from '../types/bookmark';
import { useBookmarks } from '../hooks/useBookmarks';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addBookmark } = useBookmarks();

  const handleSubmit = async (data: BookmarkFormData) => {
    await addBookmark(data);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Recent Bookmarks</h2>
        <Button icon={Plus} size="md" onClick={() => setIsModalOpen(true)}>
          Add Bookmark
        </Button>
      </div>

      <BookmarkList />

      <CreateBookmarkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;