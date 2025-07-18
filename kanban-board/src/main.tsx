
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';
import ReactDOM from 'react-dom/client';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);