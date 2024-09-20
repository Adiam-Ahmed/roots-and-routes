import React from 'react';
import demoTheme from '../../components/UI/demoTheme.jsx';
import NAVIGATION from '../../data/navigation.jsx';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Logo from '../../assets/Logo.png';
import DemoPageContent from '../../components/UI/DemoPageContent.jsx';


function DashBoard() {
  const [pathname, setPathname] = React.useState('/dashboard');


  const router = React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src={Logo} alt="roots and routes logo" />,
        title: 'Roots & Routes',
      }}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashBoard;
