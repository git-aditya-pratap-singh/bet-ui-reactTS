import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AppOutlet = React.lazy(() => import('../components/subcomponents/AppOutlet'));

const AppoutletVerify = ({ children }: { children: React.ReactNode }) => {
  const outletStatus = useSelector((store: any) => store.centerliazedStore.app_outlet);

  if (outletStatus?.outletName === 'Live Events') {
    return <Navigate to="/" />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
};
export default AppoutletVerify;
