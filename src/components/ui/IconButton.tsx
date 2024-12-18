import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

const IconButton = ({ icon: Icon, label, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label={label}
    >
      <Icon className="h-5 w-5 text-gray-500" />
    </button>
  );
};

export default IconButton;