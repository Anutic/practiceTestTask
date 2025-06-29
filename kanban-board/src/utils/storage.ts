import type { IBoardState } from '@/types/board';
import { defaultColumns } from '@/types/board';

const defaultBoard = {
  id: 'board-1',
  title: 'Default Board',
  columns: defaultColumns.map((col, index) => ({
    ...col,
    id: `col-board-1-${index + 1}`,
  })),
};

export const loadFromLocalStorage = (key: string): IBoardState => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return { boards: [defaultBoard] };
    }
    const data = JSON.parse(serializedData);

    if (data && Array.isArray(data.boards)) {
      return data as IBoardState;
    }
    return { boards: [defaultBoard] };
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return { boards: [defaultBoard] };
  }
};

export const saveToLocalStorage = (key: string, data: IBoardState): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};