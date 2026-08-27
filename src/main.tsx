import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import React from 'react';

class ErrorBoundary extends React.Component<any, any> {
  state = { hasError: false, error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    const self = this as any;
    if (self.state.hasError) {
      return (
        <div style={{ padding: 20, color: 'red', backgroundColor: '#fee' }}>
          <h1>Ocorreu um erro no aplicativo!</h1>
          <pre>{self.state.error?.message}</pre>
          <pre style={{ fontSize: '0.8em' }}>{self.state.error?.stack}</pre>
        </div>
      );
    }
    return self.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
