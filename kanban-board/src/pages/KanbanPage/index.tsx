import { Provider } from 'react-redux';
import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';
import { store } from '@/store';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { PageContainer, Header, Title, AddButton } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addBoard } from '@/store/slices/boardSlice';
import type { RootState } from '@/store';
import { useState, } from 'react';

const KanbanPage = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.board.boards ?? []);
  const [selectedBoardId, setSelectedBoardId] = useState<string>(boards[0]?.id || 'default');

  const handleAddBoard = () => {
    const newBoardId = Date.now().toString();
    dispatch(addBoard({
      title: `Board ${newBoardId}`,
    }));
    setSelectedBoardId(newBoardId); 
  };

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <PageContainer>
          <Header>
            <Title>Kanban Dashboard</Title>
            <AddButton onClick={handleAddBoard}>+</AddButton>
          </Header>
          <KanbanBoard 
            useRedux={true} 
            selectedBoardId={selectedBoardId} 
            setSelectedBoardId={setSelectedBoardId} 
          />
        </PageContainer>
      </ErrorBoundary>
    </Provider>
  );
};

export default KanbanPage;