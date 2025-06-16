import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/storage';
import { setColumns, addColumn, updateColumnColor } from '../../store/slices/boardSlice';
import Column from '../Column/Column';
import AddColumnForm from './AddColumnForm';
import { BoardContainer } from './styles';
import styled from 'styled-components';
import type { IBoardState, KanbanBoardProps } from '@/types/board';
import type { AppDispatch, RootState } from '../../store';

const STORAGE_KEY = 'kanban-board';

type KanbanBoardComponentProps = KanbanBoardProps | {
  useRedux: true;
};

const AddColumnButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d9e6d9;
  border-radius: 20px;
  padding: 4px 12px; 
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  width: 200px;
  height: 36px; /* Fixed height to keep it narrow */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1; /* Prevents text from stretching vertically */

  &:hover {
    background-color: #cce0cc;
  }
`;

const Counter = styled.div`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-weight: normal;
  color: #666;
`;

const PlusIcon = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

const KanbanBoard = (props: KanbanBoardComponentProps) => {
  if ('useRedux' in props && props.useRedux) {
    const dispatch = useDispatch<AppDispatch>();
    const columns = useSelector((state: RootState) => state.board.columns);
    const [showAddColumn, setShowAddColumn] = useState(false);

    useEffect(() => {
      const savedData = loadFromLocalStorage(STORAGE_KEY);
      if (savedData && Array.isArray(savedData.columns)) {
        dispatch(setColumns(savedData.columns));
      }
    }, [dispatch]);

    useEffect(() => {
      saveToLocalStorage(STORAGE_KEY, { columns });
    }, [columns]);

    const handleAddColumn = (title: string, color: string) => {
      dispatch(addColumn({ title, color }));
      setShowAddColumn(false);
    };

    const handleColumnColorChange = (columnId: string, color: string) => {
      dispatch(updateColumnColor({ columnId, color }));
    };

    return (
      <BoardContainer>
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            onColorChange={(color) => handleColumnColorChange(column.id, color)}
          />
        ))}
        {showAddColumn ? (
          <AddColumnForm
            onAdd={handleAddColumn}
            onCancel={() => setShowAddColumn(false)}
          />
        ) : (
          <AddColumnButton as="button" onClick={() => setShowAddColumn(true)}>
            <Counter>0</Counter>
            Column Title
            <PlusIcon>+</PlusIcon>
          </AddColumnButton>
        )}
      </BoardContainer>
    );
  }

  const {
    columns,
    updateColumns, 
    onAddColumn,
    onColumnColorChange
  } = props as KanbanBoardProps;

  const [showAddColumn, setShowAddColumn] = useState(false);

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          onColorChange={(color) => onColumnColorChange(column.id, color)}
        />
      ))}
      {showAddColumn ? (
        <AddColumnForm
          onAdd={(title, color) => {
            onAddColumn(title, color);
            setShowAddColumn(false);
          }}
          onCancel={() => setShowAddColumn(false)}
        />
      ) : (
        <AddColumnButton as="button" onClick={() => setShowAddColumn(true)}>
          <Counter>0</Counter>
          Column Title
          <PlusIcon>+</PlusIcon>
        </AddColumnButton>
      )}
    </BoardContainer>
  );
};

KanbanBoard.defaultProps = {
  useRedux: true
};

export default KanbanBoard;