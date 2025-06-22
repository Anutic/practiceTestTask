
import { Provider } from 'react-redux';
import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';
import { store } from '@/store';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import { PageContainer, Header, Title, AddButton } from './styles'

const KanbanPage = () => {
  return (
    <Provider store={store}>
      
        <ErrorBoundary>
          <PageContainer>
            <Header>
              <Title>Kanban Dashboard</Title>
              <AddButton onClick={() => { /* Логика */ }}>+</AddButton>
            </Header>
            <KanbanBoard useRedux={true} />
          </PageContainer>
        </ErrorBoundary>
      
    </Provider>
  );
};

export default KanbanPage;