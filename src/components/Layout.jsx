import { HeadBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Container } from '@mui/material';

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
