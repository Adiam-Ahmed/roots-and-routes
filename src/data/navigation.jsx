import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';

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
        title: 'Resource Hub',
        icon: <LayersIcon />,
    },
];

export default NAVIGATION;
