// src/components/shared/header.tsx
import * as React from 'react';
import { Container } from './container';
// import cn from 'classnames'; 

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <div>
          {/* Логотип или название сайта */}
          <h1 className="text-2xl font-bold">MySite</h1>
        </div>
        <nav>
          {/* Навигация */}
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700">Home</a></li>
            <li><a href="#" className="text-gray-700">About</a></li>
            <li><a href="#" className="text-gray-700">Services</a></li>
            <li><a href="#" className="text-gray-700">Contact</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
