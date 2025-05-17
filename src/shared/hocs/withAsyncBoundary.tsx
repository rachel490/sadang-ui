import { ComponentProps, ComponentType, Suspense } from 'react';
import ErrorBoundary from '@shared/components/ErrorBoundary';

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

type SuspenseProps = ComponentProps<typeof Suspense>;

type AsyncBoundaryProps = {
  rejectedFallback: ErrorBoundaryProps['fallback'];
  pendingFallback: SuspenseProps['fallback'];
};

function withAsyncBoundary<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
  { rejectedFallback, pendingFallback }: AsyncBoundaryProps,
) {
  return (props: Props) => {
    return (
      <ErrorBoundary fallback={rejectedFallback}>
        <Suspense fallback={pendingFallback}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <WrappedComponent {...(props as any)} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}

export default withAsyncBoundary;
