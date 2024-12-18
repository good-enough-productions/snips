import React from 'react';
import { isValidUrl } from '../../../utils/validation';

interface UrlInputProps {
  value: string;
  onChange: (url: string) => void;
  error?: string;
}

const UrlInput = ({ value, onChange, error }: UrlInputProps) => {
  return (
    <div>
      <label htmlFor="url" className="block text-sm font-medium text-gray-700">
        URL
      </label>
      <input
        type="url"
        id="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 block w-full rounded-md border ${
          error ? 'border-red-300' : 'border-gray-300'
        } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
        placeholder="https://example.com"
        required
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default UrlInput;