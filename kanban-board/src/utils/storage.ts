
import type { IBoardState } from '@/types/board';

export const loadFromLocalStorage = (key: string): IBoardState | null => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return null;
    }
    const data = JSON.parse(serializedData);

    if (data && Array.isArray(data.columns)) {
      return data as IBoardState;
    }
    return null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

export const saveToLocalStorage = (key: string, data: IBoardState): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};