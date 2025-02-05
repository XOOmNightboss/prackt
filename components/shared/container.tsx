import * as React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};
