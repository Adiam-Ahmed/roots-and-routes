import * as React from 'react';
import { supabase } from '../../supabaseClient.js';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import CTAButton from '../UI/CTAButton/CTAButton.jsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';


// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#e6dad1',
            dark: '#9d5a4d',
        },
        secondary: {
            main: '#e6dad1',
            dark: '#9d5a4d',
        },
    },
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#d5baa6',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100px',
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
        color: '#fff'
    }),
}));


function DashboardContent() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const fullName = user.user_metadata.firstName;
    const firstName = fullName.split(' ')[0]; 


    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/');
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        width: 1,
                        height: 150,
                        borderRadius: 1,
                        bgcolor: '#9d5a4d',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                            bgcolor: '#bda39e',
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            py: 2,
                        }}
                    >
                        <CTAButton
                            className="header-btn"
                            text="Log Out"
                            type="header-btn"
                            onClick={handleLogout}
                        />
                    </Box>
                    <Stack
                        sx={{
                            width: 1,
                            height: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            py: 2,
                        }}
                    >
                        <h1>Welcome to your Dashboard, {firstName}.</h1>
                    </Stack>
                </Box>
                <Box sx={{ width: '98%', m: 5 ,}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={12}>
                            <Item>Full Name: {user.user_metadata.firstName} {user.user_metadata.lastName } </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item>Preferred Country: {user.user_metadata.country}</Item>
                        </Grid>
                        <Grid size={6}>
                            <Item>Another Preferred Country: {user.user_metadata.countryTwo}</Item>
                        </Grid>
                        <Grid size={6}>
                            <Item>Preferred Language: {user.user_metadata.language}</Item>
                        </Grid>
                        <Grid size={6}>
                            <Item>Email: {user.email}</Item>
                        </Grid>
                        <Grid size={6}>
                            <Item>State: {user.user_metadata.state}</Item>
                        </Grid>
                        <Grid size={6}>
                            <Item>City: {user.user_metadata.city}</Item>
                        </Grid>
                        <Grid size={12 }>
                            <Item>Postal Code: {user.user_metadata.postalCode}</Item>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
            
        </>

    );
}

export default DashboardContent;
