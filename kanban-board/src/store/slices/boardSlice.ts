import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { defaultColumns,  } from '../../types/board';
import type { IBoardState, ICard, IColumn, IBoard } from '../../types/board';

export const defaultBoard: IBoard = {
  id: 'board-1',
  title: 'Default Board',
  columns: defaultColumns.map((col, index) => ({
    ...col,
    id: `col-board-1-${index + 1}`,
  })),
};

const initialState: IBoardState = {
  boards: [defaultBoard],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<Omit<IBoard, 'id' | 'columns'>>) => {
      const newBoardId = Date.now().toString();
      const newBoard: IBoard = {
        id: newBoardId,
        title: action.payload.title,
        columns: defaultColumns.map((col, index) => ({
          ...col,
          id: `col-${newBoardId}-${index + 1}`,
        })),
      };
      state.boards.push(newBoard);
    },
    setColumns: (state, action: PayloadAction<{ boardId: string; columns: IColumn[] }>) => {
      const board = state.boards.find(b => b.id === action.payload.boardId);
      if (board) {
        board.columns = action.payload.columns;
      }
    },
    addColumn: (state, action: PayloadAction<{ boardId: string; column: Omit<IColumn, 'id' | 'cards'> }>) => {
      const board = state.boards.find(b => b.id === action.payload.boardId);
      if (board) {
        const newColumn = {
          ...action.payload.column,
          id: Date.now().toString(),
          cards: [],
        };
        board.columns.push(newColumn);
      }
    },
    removeColumn: (state, action: PayloadAction<{ boardId: string; columnId: string }>) => {
      const board = state.boards.find(b => b.id === action.payload.boardId);
      if (board) {
        board.columns = board.columns.filter(col => col.id !== action.payload.columnId);
      }
    },
    addCard: (state, action: PayloadAction<{ boardId: string; columnId: string; card: Omit<ICard, 'id'> }>) => {
      const board = state.boards.find(b => b.id === action.payload.boardId);
      if (board) {
        const column = board.columns.find(col => col.id === action.payload.columnId);
        if (column) {
          column.cards.push({
            ...action.payload.card,
            id: Date.now().toString(),
          });
        }
      }
    },
    updateCard: (state, action: PayloadAction<{ boardId: string; columnId: string; card: ICard }>) => {
      const board = state.boards.find(b => b.id === action.payload.boardId);
      if (board) {
        const column = board.columns.find(col => col.id === action.payload.columnId);
        if (column) {
          const cardIndex = column.cards.findIndex(c => c.id === action.payload.card.id);
          if (cardIndex !== -1) {
            column.cards[cardIndex] = action.payload.card;
          }
        }
      }
    },
    moveCard: (state, action: PayloadAction<{ 
      boardId: string; 
      sourceColumnId: string; 
      targetColumnId: string; 
      cardId: string; 
      newPosition?: number 
    }>) => {
      const { boardId, sourceColumnId, targetColumnId, cardId, newPosition } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      if (board) {
        const sourceColumn = board.columns.find(col => col.id === sourceColumnId);
        const targetColumn = board.columns.find(col => col.id === targetColumnId);
        if (sourceColumn && targetColumn) {
          const cardIndex = sourceColumn.cards.findIndex(c => c.id === cardId);
          if (cardIndex !== -1) {
            const [card] = sourceColumn.cards.splice(cardIndex, 1);
            if (newPosition !== undefined) {
              targetColumn.cards.splice(newPosition, 0, card);
            } else {
              targetColumn.cards.push(card);
            }
          }
        }
      }
    },
    updateColumnColor: (state, action: PayloadAction<{ boardId: string; columnId: string; color: string }>) => {
      const board = state.boards.find(b => b.id === action.payload.boardId);
      if (board) {
        const column = board.columns.find(col => col.id === action.payload.columnId);
        if (column) {
          column.color = action.payload.color;
        }
      }
    },
    removeCard: (state, action: PayloadAction<{ boardId: string; columnId: string; cardId: string }>) => {
      const board = state.boards.find(b => b.id === action.payload.boardId);
      if (board) {
        const column = board.columns.find(col => col.id === action.payload.columnId);
        if (column) {
          column.cards = column.cards.filter(card => card.id !== action.payload.cardId);
        }
      }
    },
  },
});

export const { 
  addBoard,
  setColumns,
  addColumn, 
  removeColumn, 
  addCard, 
  updateCard, 
  moveCard,
  updateColumnColor,
  removeCard 
} = boardSlice.actions;

export default boardSlice.reducer;