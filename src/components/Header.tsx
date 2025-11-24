import { AppBar, Toolbar, Box, Container } from '@mui/material';

export default function Header() {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                    <Box
                        component="img"
                        src="/logo.jpg"
                        alt="Revolve Research"
                        sx={{
                            height: 50,
                            objectFit: 'contain',
                        }}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
