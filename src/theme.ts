import { createTheme } from '@mui/material/styles';

// Clinical black and white theme for Revolve Research
export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000', // Pure black
            light: '#333333',
            dark: '#000000',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF', // Pure white
            light: '#FFFFFF',
            dark: '#F5F5F5',
            contrastText: '#000000',
        },
        background: {
            default: '#FFFFFF',
            paper: '#FAFAFA',
        },
        text: {
            primary: '#000000',
            secondary: '#666666',
        },
        divider: '#E0E0E0',
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
            letterSpacing: '-0.01em',
            lineHeight: 1.4,
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4,
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.5,
        },
        h6: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        button: {
            fontWeight: 600,
            textTransform: 'none',
            letterSpacing: '0.02em',
        },
    },
    shape: {
        borderRadius: 2,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 2,
                    padding: '12px 32px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(-2px)',
                    },
                },
                outlined: {
                    borderWidth: '2px',
                    '&:hover': {
                        borderWidth: '2px',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: '#FFFFFF',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#FAFAFA',
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#FFFFFF',
                        },
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
    },
});
