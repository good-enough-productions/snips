export interface Bookmark {
  id: string;
  url: string;
  title: string;
  description?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface BookmarkFormData {
  url: string;
  title: string;
  description?: string;
  tags: string[];
}