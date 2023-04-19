import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
