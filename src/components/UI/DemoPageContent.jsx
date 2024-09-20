import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardContent from '../../components/DashboardContent/DashboardContent.jsx';
import CommunityConnections from '../../components/CommunityConnections/CommunityConnections.jsx';
import ResourceHub from '../../components/ResourceHub/ResourceHub.jsx';
import Events from '../../components/Events/Events.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

function DemoPageContent({ pathname }) {
    const { user } = useAuth();
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const getQuery = () => {
        switch (pathname) {
            case '/culturalconnect/communityconnections':
                return `search the web and find three community-based non-profit and charitable organization of people hub that matches a newcomer with a community from ${user.user_metadata.country} 
                    and ${user.user_metadata.countryTwo} and who speaks ${user.user_metadata.language} 
                    and is residing in ${user.user_metadata.city}, ${user.user_metadata.state}. Generate it as a key-value pair object in a format 
                    {"description": "description of the Community Centre importance", "centers": [{"name": "", "address": "","language_support": "","programs_offered": "","newcomer_friendly": "","contact": "","website": "","websiteThumbnail": ""}],"disclaimer": ""}`;
            case '/resourcehub':
                return `search the web for resources that will help newcomers from ${user.user_metadata.country} 
                    and ${user.user_metadata.countryTwo}, residing in ${user.user_metadata.city}, ${user.user_metadata.state}. 
                    Generate it as a key-value pair object in a format {"resources": [{"name": "", "description": "", "link": ""}],"disclaimer": ""}`;
            default:
                return '';
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const query = getQuery();
            if (!query) return;

            setLoading(true);
            setError('');

            try {
                const result = await axios.post('https://fisjazokojkifetklfoq.supabase.co/functions/v1/openai', {
                    query
                });
                const data = result.data;
                setResponse(data);
            } catch (err) {
                setError('An error occurred while fetching the response.', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [pathname]);

    
    let content;

    switch (pathname) {
        case '/dashboard':
            content = <DashboardContent />;
            break;
        case '/culturalconnect/communityconnections':
            content = (
                <CommunityConnections
                    response={response}
                    loading={loading}
                    error={error}
                />
            );
            break;
        case '/culturalconnect/events':
            content = (
                <Events />
            );
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

export default DemoPageContent;
