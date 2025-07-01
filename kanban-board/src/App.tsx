
import KanbanPage from './pages/KanbanPage';
import { ThemeProvider } from '@/context/ThemeContext';

function App() {
return (
    <ThemeProvider>
      <KanbanPage />
    </ThemeProvider>
  );
}

export default App;