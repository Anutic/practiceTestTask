import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { ErrorContainer, ErrorBox, ErrorTitle, ErrorMessage, RetryButton } from './styles';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorBox>
            <ErrorTitle>Oops, something went wrong</ErrorTitle>
            <ErrorMessage>
              An unexpected error occurred. Please try again.
            </ErrorMessage>
            <RetryButton onClick={this.resetError}>Try Again</RetryButton>
          </ErrorBox>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;