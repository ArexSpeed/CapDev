import { FC } from 'react';
import { ReactNode } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Navigation />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};
