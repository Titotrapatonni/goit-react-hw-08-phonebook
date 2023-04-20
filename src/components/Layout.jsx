import { HeadBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => {
  return (
    <>
      <HeadBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </>
  );
};
