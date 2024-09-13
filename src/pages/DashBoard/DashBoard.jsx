import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Logo from '../../assets/Logo.png'
import DashboardContent from '../../components/DashboardContent/DashboardContent';
import CommunityConnections from '../../components/CommunityConnections/CommunityConnections';
import ResourceHub from '../../components/ResourceHub/ResourceHub';
import Events from '../../components/Events/Events';


const NAVIGATION = [
  {
    kind: 'header',
    title: 'Personal',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'culturalconnect',
    title: 'Cultural Connect',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'communityconnections',
        title: 'Community Connections',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'events',
        title: 'Events',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'resourcehub',
    title: 'ResourceHub',
    icon: <LayersIcon />,
  },
];

// Define your color palette based on SCSS variables
const demoTheme = createTheme({
  palette: {
    primary: {
      main: '#9d5a4d', // Primary color
    },
    secondary: {
      main: '#e6dad1', // Secondary color
    },
    background: {
      default: '#ffffff', // Background color (white)
    },
    text: {
      primary: '#333', // Text color, adjust if needed
    },
    // Optionally, you can add additional custom colors if required
    customColors: {
      mutedGold: '#d1a784', // Custom color for muted gold
    },
  },
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

///Cultural Events  Community Connections
function DemoPageContent({ pathname }) {
  let content;

  switch (pathname) {
    case '/dashboard':
      content = <DashboardContent />;
      break;
    case '/culturalconnect/communityconnections':
      content = <CommunityConnections />;
      break;
    case '/culturalconnect/events':
      content = <Events />;
      break;
    case '/resourcehub':
      content = <ResourceHub />;
      break;
    default:
      content = <Typography>Page not found</Typography>;
      break;
  }

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {content}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashBoard(props) {

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    // preview-start
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
    // preview-end
  );
}



export default DashBoard;
