'use client';

import {PureComponent, type ErrorInfo, type PropsWithChildren} from 'react';

export type ErrorBoundaryProps = PropsWithChildren;

export interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError() {
    return {hasError: true};
  }

  state: ErrorBoundaryState = {hasError: false};

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary', error, info);
  }

  render() {
    return this.state.hasError
      ? 'Oops, something went wrong!'
      : this.props.children;
  }
}
