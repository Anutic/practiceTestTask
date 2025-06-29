export type Priority = 'Low' | 'Medium' | 'High';

export interface ICard {
  id: string;
  title: string;
  description: string;
  priority?: Priority;
}

export interface IColumn {
  id: string;
  title: string;
  color: string;
  cards: ICard[];
}


export interface IBoard {
  id: string;
  title: string;
  columns: IColumn[];
}
export interface IBoardState {
  boards: IBoard[];
}

export interface KanbanBoardProps {
  columns: IColumn[];
  updateColumns: (columns: IColumn[]) => void; 
  onAddColumn: (title: string, color: string) => void;
  onColumnColorChange: (columnId: string, color: string) => void;
}


export const defaultColumns: Omit<IColumn, 'id'>[] = [
  { title: 'To Do', color: '#4f46e5', cards: [] },
  { title: 'In Progress', color: '#f59e0b', cards: [] },
  { title: 'Done', color: '#22c55e', cards: [] },
];