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

export interface IBoardState {
  columns: IColumn[];
}

export interface KanbanBoardProps {
  columns: IColumn[];
  updateColumns: (columns: IColumn[]) => void; // Переименовали setColumns
  onAddColumn: (title: string, color: string) => void;
  onColumnColorChange: (columnId: string, color: string) => void;
}