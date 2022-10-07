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
      <div className="flex  w-full h-full">
        <Navigation />
        <main className="flex bg-slate-300 text-black ml-[256px] w-full h-full ">{children}</main>
      </div>
    </div>
  );
};
