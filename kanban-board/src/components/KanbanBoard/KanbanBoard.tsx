import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/storage';
import { setColumns, addColumn, updateColumnColor } from '../../store/slices/boardSlice';
import Column from '../Column/Column';
import AddColumnForm from './AddColumnForm';
import { BoardContainer, AddColumnButton, Counter, PlusIcon } from './styles';
import styled from 'styled-components';
import type { IBoardState, KanbanBoardProps, IColumn } from '@/types/board';
import type { AppDispatch, RootState } from '../../store';


const STORAGE_KEY = 'kanban-board';

type KanbanBoardComponentProps = KanbanBoardProps | {
  useRedux: true;
};

const KanbanBoard = (props: KanbanBoardComponentProps) => {
  const [showAddColumn, setShowAddColumn] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const addColumnButtonRef = useRef<HTMLButtonElement>(null); 


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showAddColumn &&
        addColumnButtonRef.current &&
        !addColumnButtonRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('.add-icon') 
      ) {
        setShowAddColumn(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAddColumn]);

  const handleAddColumnClick = () => {
    setShowAddColumn(true);
  };

  if ('useRedux' in props && props.useRedux) {
    const dispatch = useDispatch<AppDispatch>();
    const columns = useSelector((state: RootState) => state.board.columns);

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
      setShowAddForm(false);
    };

    const handleColumnColorChange = (columnId: string, color: string) => {
      dispatch(updateColumnColor({ columnId, color }));
    };

    return (
      <BoardContainer>
        {columns.map((column: IColumn) => (
          <Column
            key={column.id}
            column={column}
            onColorChange={(color) => handleColumnColorChange(column.id, color)}
            onAddColumnClick={handleAddColumnClick}
          />
        ))}
        {showAddColumn && !showAddForm && (
          <AddColumnButton
            as="button"
            ref={addColumnButtonRef}
            onClick={() => setShowAddForm(true)}
          >
            <Counter>0</Counter>
            Column Title
            <PlusIcon>+</PlusIcon>
          </AddColumnButton>
        )}
        {showAddForm && (
          <AddColumnForm
            onAdd={handleAddColumn}
            onCancel={() => {
              setShowAddForm(false);
              setShowAddColumn(false);
            }}
          />
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

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          onColorChange={(color) => onColumnColorChange(column.id, color)}
          onAddColumnClick={handleAddColumnClick}
        />
      ))}
      {showAddColumn && !showAddForm && (
        <AddColumnButton
          as="button"
          ref={addColumnButtonRef}
          onClick={() => setShowAddForm(true)}
        >
          <Counter>0</Counter>
          Column Title
          <PlusIcon>+</PlusIcon>
        </AddColumnButton>
      )}
      {showAddForm && (
        <AddColumnForm
          onAdd={(title, color) => {
            onAddColumn(title, color);
            setShowAddColumn(false);
            setShowAddForm(false);
          }}
          onCancel={() => {
            setShowAddForm(false);
            setShowAddColumn(false);
          }}
        />
      )}
    </BoardContainer>
  );
};

KanbanBoard.defaultProps = {
  useRedux: true
};

// const KanbanBoard = ({ useRedux }: { useRedux: boolean }) => {
//   throw new Error('Test error in KanbanBoard');
//   return <div>Kanban Board Content</div>;
// };

export default KanbanBoard;