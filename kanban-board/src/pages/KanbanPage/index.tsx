
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';
import { store } from '@/store';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import { PageContainer, Header, Title, AddButton } from './styles'

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