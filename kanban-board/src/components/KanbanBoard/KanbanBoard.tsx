import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveToLocalStorage } from '../../utils/storage';
import { addColumn, updateColumnColor } from '../../store/slices/boardSlice';
import Column from '../Column/Column';
import AddColumnForm from './AddColumnForm';
import { BoardContainer, AddColumnButton, Counter, PlusIcon, BoardSelector } from './styles';
import type { KanbanBoardProps, IColumn, IBoard } from '@/types/board';
import type { AppDispatch, RootState } from '../../store';

const STORAGE_KEY = 'kanban-board';

type KanbanBoardComponentProps = 
  | KanbanBoardProps
  | {
      useRedux: true;
      selectedBoardId: string;
      setSelectedBoardId: (id: string) => void;
    };

const KanbanBoard = (props: KanbanBoardComponentProps) => {
  const [showAddColumn, setShowAddColumn] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const addColumnButtonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const boards = useSelector((state: RootState) => state.board.boards ?? []);

  useEffect(() => {
    console.log('Boards:', boards); 
  }, [boards]);
//отдельный хук для этого
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
    const { selectedBoardId, setSelectedBoardId } = props;
    const currentBoard: IBoard = boards.find((board: IBoard) => board.id === selectedBoardId) || 
                        { id: 'default', title: 'Default Board', columns: [] };
    const columns = currentBoard.columns;

    useEffect(() => {
      saveToLocalStorage(STORAGE_KEY, { boards });
    }, [boards]);

    const handleAddColumn = (title: string, color: string) => {
      dispatch(addColumn({ boardId: currentBoard.id, column: { title, color } }));
      setShowAddColumn(false);
      setShowAddForm(false);
    };

    const handleColumnColorChange = (columnId: string, color: string) => {
      dispatch(updateColumnColor({ boardId: currentBoard.id, columnId, color }));
    };

    return (
      <>
        <BoardSelector 
          value={selectedBoardId} 
          onChange={(e) => {//выносим в отдельную функция 
            console.log('Selected board ID:', e.target.value); 
            setSelectedBoardId(e.target.value);
          }}
        >
          {boards.map((board: IBoard) => (//деструктуризировать код
            <option key={board.id} value={board.id}>{board.title}</option>
          ))}
          {boards.length === 0 && (
            <option value="default">No Boards Available</option>
          )}
        </BoardSelector>
        <BoardContainer key={currentBoard.id}>
          {columns.map((column: IColumn) => (
            <Column
              key={column.id}
              column={column}
              boardId={currentBoard.id}
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
      </>
    );
  }

  const {
    columns,
    onAddColumn,
    onColumnColorChange
  } = props as KanbanBoardProps;

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          boardId="default"
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

export default KanbanBoard;