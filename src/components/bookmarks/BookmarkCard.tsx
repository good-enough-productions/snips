import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Clock, ExternalLink, Tag as TagIcon } from 'lucide-react';
import { Bookmark } from '../../types/bookmark';
import { estimateReadingTime } from '../../utils/readingTime';

interface BookmarkCardProps {
  bookmark: Bookmark;
}

const BookmarkCard = ({ bookmark }: BookmarkCardProps) => {
  const readingTime = estimateReadingTime(bookmark.description || '');

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900">
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                {bookmark.title}
                <ExternalLink className="inline-block ml-2 h-4 w-4" />
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {new URL(bookmark.url).hostname}
            </p>
          </div>
        </div>

        {bookmark.description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {bookmark.description}
          </p>
        )}

        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readingTime} min read
          </span>
          <span>
            Added {formatDistanceToNow(bookmark.createdAt, { addSuffix: true })}
          </span>
        </div>

        {bookmark.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {bookmark.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                <TagIcon className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarkCard;