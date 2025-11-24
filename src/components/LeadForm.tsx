import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Alert,
    Paper,
    Stack,
} from '@mui/material';

export default function LeadForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [acceptMarketing, setAcceptMarketing] = useState(true);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        if (!formData.email) {
            setStatus({ type: 'error', message: 'Please enter your email address.' });
            setIsSubmitting(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            setIsSubmitting(false);
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form data to send to email provider:', { ...formData, acceptMarketing });

            setStatus({
                type: 'success',
                message: 'Success! Check your inbox for your free guide and prelaunch access details.',
            });

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            });
            setAcceptMarketing(true);
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box id="lead-form" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#000000', color: '#FFFFFF' }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            fontWeight: 700,
                            fontSize: { xs: '1.75rem', md: '2.25rem' },
                            textAlign: 'center',
                        }}
                    >
                        Ready to Research Like the Pros?
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            maxWidth: '600px',
                            mx: 'auto',
                            mb: 3,
                            fontSize: { xs: '1rem', md: '1.125rem' },
                        }}
                    >
                        Enter your email to get the guide + prelaunch peptide access
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                        sx={{ flexWrap: 'wrap' }}
                    >
                        <Box
                            sx={{
                                px: 3,
                                py: 1,
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                            }}
                        >
                            ✓ Free Guide
                        </Box>
                        <Box
                            sx={{
                                px: 3,
                                py: 1,
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                            }}
                        >
                            ✓ Prelaunch Access
                        </Box>
                        <Box
                            sx={{
                                px: 3,
                                py: 1,
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                            }}
                        >
                            ✓ No Spam, Ever
                        </Box>
                    </Stack>
                </Box>

                <Paper
                    component="form"
                    onSubmit={handleSubmit}
                    elevation={0}
                    sx={{
                        p: 4,
                        backgroundColor: '#FFFFFF',
                        maxWidth: '550px',
                        mx: 'auto',
                        borderRadius: 2,
                    }}
                >
                    <Stack spacing={3}>
                        <Stack spacing={2}>
                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                autoComplete="email"
                                placeholder="your.email@example.com"
                            />
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                variant="outlined"
                            />
                        </Stack>

                        {status.message && (
                            <Alert severity={status.type as 'success' | 'error'}>
                                {status.message}
                            </Alert>
                        )}

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={isSubmitting}
                            sx={{
                                py: 1.75,
                                fontSize: '1rem',
                                fontWeight: 600,
                                backgroundColor: '#000000',
                                '&:hover': {
                                    backgroundColor: '#333333',
                                },
                            }}
                        >
                            {isSubmitting ? 'Sending...' : 'Get Instant Access'}
                        </Button>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="acceptMarketing"
                                    checked={acceptMarketing}
                                    onChange={(e) => setAcceptMarketing(e.target.checked)}
                                />
                            }
                            label="I want to receive updates about peptide research and exclusive resources"
                            sx={{ color: 'text.primary', fontSize: '0.875rem' }}
                        />

                        <Typography
                            variant="caption"
                            sx={{ display: 'block', textAlign: 'center', color: 'text.secondary' }}
                        >
                            We respect your privacy. Unsubscribe at any time.
                        </Typography>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}
