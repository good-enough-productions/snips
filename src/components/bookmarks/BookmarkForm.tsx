import React, { useState, useEffect } from 'react';
import { Tag as TagIcon, Loader } from 'lucide-react';
import Button from '../ui/Button';
import { BookmarkFormData } from '../../types/bookmark';
import { extractMetadata } from '../../utils/metadata';
import { isValidUrl } from '../../utils/validation';
import TagInput from './TagInput';

interface BookmarkFormProps {
  onSubmit: (data: BookmarkFormData) => Promise<void>;
  onCancel: () => void;
}

const BookmarkForm = ({ onSubmit, onCancel }: BookmarkFormProps) => {
  const [formData, setFormData] = useState<BookmarkFormData>({
    url: '',
    title: '',
    description: '',
    tags: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUrlChange = async (url: string) => {
    setFormData(prev => ({ ...prev, url }));
    
    if (isValidUrl(url)) {
      setLoading(true);
      setError('');
      try {
        const metadata = await extractMetadata(url);
        setFormData(prev => ({
          ...prev,
          title: metadata.title,
          description: metadata.description,
        }));
      } catch (err) {
        setError('Failed to fetch page metadata');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidUrl(formData.url)) {
      setError('Please enter a valid URL');
      return;
    }
    
    try {
      await onSubmit(formData);
    } catch (err) {
      setError('Failed to save bookmark');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700">
          URL
        </label>
        <input
          type="url"
          id="url"
          value={formData.url}
          onChange={(e) => handleUrlChange(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="https://example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Page Title"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Add a description..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <TagInput
          tags={formData.tags}
          onChange={(tags) => setFormData(prev => ({ ...prev, tags }))}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <div className="flex justify-end space-x-3 pt-4">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? <Loader className="h-5 w-5 animate-spin" /> : 'Save Bookmark'}
        </Button>
      </div>
    </form>
  );
};

export default BookmarkForm;