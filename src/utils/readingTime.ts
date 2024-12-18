import { READING_SPEED } from '../constants';

export function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / READING_SPEED.WORDS_PER_MINUTE);
  return Math.max(1, minutes);
}