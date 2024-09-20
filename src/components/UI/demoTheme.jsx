import { createTheme } from '@mui/material/styles';

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

export default demoTheme;