import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IBoardState, ICard, IColumn } from '../../types/board';

const initialState: IBoardState = {

  columns: [
    { id: '1', title: 'To Do', color: '#4f46e5', cards: [] },
    { id: '2', title: 'In Progress', color: '#f59e0b', cards: [] },
    { id: '3', title: 'Done', color: '#22c55e', cards: [] },
  ],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<IColumn[]>) => {
      state.columns = action.payload;
    },
    addColumn: (state, action: PayloadAction<Omit<IColumn, 'id' | 'cards'>>) => {
      const newColumn = {
        ...action.payload,
        id: Date.now().toString(),
        cards: [],
      };
      state.columns.push(newColumn);
    },
    removeColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter(col => col.id !== action.payload);
    },
    addCard: (state, action: PayloadAction<{ columnId: string; card: Omit<ICard, 'id'> }>) => {
      const column = state.columns.find(col => col.id === action.payload.columnId);
      if (column) {
        column.cards.push({
          ...action.payload.card,
          id: Date.now().toString(),
        });
      }
    },
    updateCard: (state, action: PayloadAction<{ columnId: string; card: ICard }>) => {
      const column = state.columns.find(col => col.id === action.payload.columnId);
      if (column) {
        const cardIndex = column.cards.findIndex(c => c.id === action.payload.card.id);
        if (cardIndex !== -1) {
          column.cards[cardIndex] = action.payload.card;
        }
      }
    },
    moveCard: (state, action: PayloadAction<{ 
      sourceColumnId: string; 
      targetColumnId: string; 
      cardId: string; 
      newPosition?: number 
    }>) => {
      const { sourceColumnId, targetColumnId, cardId, newPosition } = action.payload;
      
      const sourceColumn = state.columns.find(col => col.id === sourceColumnId);
      const targetColumn = state.columns.find(col => col.id === targetColumnId);
      
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
    },
    updateColumnColor: (state, action: PayloadAction<{ columnId: string; color: string }>) => {
      const column = state.columns.find(col => col.id === action.payload.columnId);
      if (column) {
        column.color = action.payload.color;
      }
    },

    removeCard: (state, action: PayloadAction<{ columnId: string; cardId: string }>) => {
      const column = state.columns.find(col => col.id === action.payload.columnId);
      if (column) {
        column.cards = column.cards.filter(card => card.id !== action.payload.cardId);
      }
    },
  },
});


export const { 
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