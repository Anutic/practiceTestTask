import { Provider } from 'react-redux';
import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';
import { store } from '@/store';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { PageContainer, Header, Title, AddButton, ThemeButton } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addBoard } from '@/store/slices/boardSlice';
import type { RootState } from '@/store';
import { useState } from 'react';
import { ThemeProvider, useTheme, themes } from '../../context/ThemeContext';

const KanbanPage = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.board.boards ?? []);
  const [selectedBoardId, setSelectedBoardId] = useState<string>(boards[0]?.id || 'default');
  const { theme, setTheme } = useTheme();

  const handleAddBoard = () => {
    const newBoardId = Date.now().toString();
    dispatch(addBoard({
      title: `Board ${newBoardId}`,
    }));
    setSelectedBoardId(newBoardId);
  };

  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <PageContainer theme={themes[theme]}>
            <Header>
              <Title theme={themes[theme]}>Kanban Dashboard</Title>
              <div>
                <ThemeButton onClick={() => setTheme('colorful')}>Colorful</ThemeButton>
                <ThemeButton onClick={() => setTheme('light')}>Light</ThemeButton>
                <ThemeButton onClick={() => setTheme('dark')}>Dark</ThemeButton>
                <AddButton onClick={handleAddBoard}>+</AddButton>
              </div>
            </Header>
            <KanbanBoard
              useRedux={true}
              selectedBoardId={selectedBoardId}
              setSelectedBoardId={setSelectedBoardId}
            />
          </PageContainer>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default KanbanPage;