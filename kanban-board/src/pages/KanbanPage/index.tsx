
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';
import { store } from '@/store';
import styled from 'styled-components';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'

const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const AddButton = styled.button`
  background:rgb(238, 238, 238);
  color: #666;
  border: 2px solid rgba(94, 103, 119, 0.1);
  border-radius: 50%;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background:rgb(225, 235, 250);
  }
`;

const KanbanPage = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <ErrorBoundary>
          <PageContainer>
            <Header>
              <Title>Kanban Dashboard</Title>
              <AddButton onClick={() => { /* Логика */ }}>+</AddButton>
            </Header>
            <KanbanBoard useRedux={true} />
          </PageContainer>
        </ErrorBoundary>
      </DndProvider>
    </Provider>
  );
};

export default KanbanPage;