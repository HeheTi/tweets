import Header from 'components/Header';
import LoaderSuspense from 'components/LoaderSuspense';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className="container">
      <Header />

      <Suspense fallback={<LoaderSuspense />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
