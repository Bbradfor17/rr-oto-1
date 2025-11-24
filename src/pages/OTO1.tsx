import { useState } from 'react';
import { Container, Typography, Box, Button, Grid, Radio, Paper } from '@mui/material';
import CheckoutForm from '../components/CheckoutForm';

const OTO1 = () => {
    const [selectedBundle, setSelectedBundle] = useState<'bundle1' | 'bundle2'>('bundle1');

    const handleSelect = (bundle: 'bundle1' | 'bundle2') => {
        setSelectedBundle(bundle);
    };

    const BundleOption = ({
        value,
        title,
        subtitle,
        imageLabel
    }: {
        value: 'bundle1' | 'bundle2',
        title: string,
        subtitle: string,
        imageLabel: string
    }) => (
        <Box
            onClick={() => handleSelect(value)}
            sx={{
                border: 2,
                borderColor: selectedBundle === value ? 'primary.main' : 'divider',
                borderRadius: 2,
                p: 3,
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                    borderColor: 'primary.light',
                    bgcolor: 'action.hover'
                },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                bgcolor: '#e0e0e0',
                mb: 2,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography>{imageLabel}</Typography>
            </Box>
            <Typography variant="h6" gutterBottom>{title}</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
                {subtitle}
            </Typography>

            <Box sx={{ mt: 'auto', mb: 2 }}>
                <Typography variant="h5" color="primary" fontWeight="bold">
                    $197
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', color: 'error.main' }}>
                    Retail: $600
                </Typography>
            </Box>

            <Radio
                checked={selectedBundle === value}
                onChange={() => handleSelect(value)}
                value={value}
                name="bundle-radio"
                sx={{ alignSelf: 'center' }}
            />
        </Box>
    );

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Wait! Your Order is Not Complete...
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Upgrade your research capabilities today.
                </Typography>
                <Typography variant="subtitle1" color="error" fontWeight="bold">
                    ⚠️ One time exclusive offer not available on our main website
                </Typography>
            </Box>

            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        display: 'inline-block',
                        maxWidth: '900px',
                        width: '100%',
                        bgcolor: 'background.paper'
                    }}
                >
                    <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                        Select Your Pro Bundle
                    </Typography>

                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        {/* Bundle 1 */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <BundleOption
                                value="bundle1"
                                title="Tirzepatide 10mg Bundle"
                                subtitle="Buy 2 Get 3 Free Vials (5 Total) - Free Shipping & Handling"
                                imageLabel="Tirzepatide Image"
                            />
                        </Grid>

                        {/* Bundle 2 */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <BundleOption
                                value="bundle2"
                                title="Semaglutide 10mg Bundle"
                                subtitle="Buy 2 Get 3 Free Vials (5 Total) - Free Shipping & Handling"
                                imageLabel="Semaglutide Image"
                            />
                        </Grid>
                    </Grid>

                    <CheckoutForm selectedBundle={selectedBundle} />

                    <Box sx={{ mt: 4 }}>
                        <Button color="inherit">
                            No thanks, I don't want to upgrade
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default OTO1;
