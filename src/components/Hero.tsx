import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';

export default function Hero() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
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

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form data to send to email provider:', formData);

            // Scroll to lead form
            const leadForm = document.getElementById('lead-form');
            leadForm?.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: { xs: 'auto', md: '90vh' },
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                backgroundColor: '#FFFFFF',
                pt: { xs: 2, md: 3 },
                pb: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
                {/* Main Headline */}
                <Typography
                    variant="h1"
                    sx={{
                        mb: 2,
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        maxWidth: '800px',
                        mx: 'auto',
                    }}
                >
                    COAs Don't Tell the Full Story. This Guide Does.
                </Typography>

                {/* Subheadline */}
                <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{
                        mb: 5,
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        fontWeight: 400,
                        lineHeight: 1.6,
                        textAlign: 'center',
                        maxWidth: '700px',
                        mx: 'auto',
                    }}
                >
                    Researchers at top institutions use these advanced validation methods to catch what standard certificates miss. Now you can too.
                </Typography>

                {/* Ebook Cover Image */}
                <Box
                    sx={{
                        maxWidth: '450px',
                        mx: 'auto',
                        mb: 4,
                        textAlign: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="/ebook-cover.jpg"
                        alt="The Researcher's Guide to Peptides - Volume 1"
                        sx={{
                            width: '100%',
                            maxWidth: '450px',
                            height: 'auto',
                            borderRadius: 1,
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.16)',
                            },
                        }}
                    />
                </Box>

                {/* Value Proposition Bullets */}
                <Box sx={{ mb: 4, maxWidth: '650px', mx: 'auto' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            fontWeight: 600,
                            fontSize: '1.125rem',
                            textAlign: 'center',
                        }}
                    >
                        Inside This Free Guide, You'll Discover:
                    </Typography>

                    <Stack spacing={1.5} sx={{ textAlign: 'left' }}>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box component="span" sx={{ mr: 1.5, color: 'primary.main', fontWeight: 700 }}>→</Box>
                            The Five Missing Contexts that every COA leaves out—and why they matter for your research
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box component="span" sx={{ mr: 1.5, color: 'primary.main', fontWeight: 700 }}>→</Box>
                            The Revolve 7-Point Quality Model for evaluating peptide suppliers beyond certificates
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box component="span" sx={{ mr: 1.5, color: 'primary.main', fontWeight: 700 }}>→</Box>
                            Common COA misinterpretations that lead to research inconsistencies (and how to avoid them)
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box component="span" sx={{ mr: 1.5, color: 'primary.main', fontWeight: 700 }}>→</Box>
                            Real case examples: Same COA, completely different realities
                        </Typography>
                    </Stack>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 2, textAlign: 'center', fontStyle: 'italic' }}
                    >
                        From raw materials to fulfillment integrity—the complete quality picture.<br />
                        Practical frameworks you can apply immediately to your research.
                    </Typography>
                </Box>

                {/* Limited Research Access Bonus Section */}
                <Box
                    sx={{
                        maxWidth: '650px',
                        mx: 'auto',
                        mb: 4,
                        p: 4,
                        backgroundColor: '#000000',
                        borderRadius: 2,
                        border: '2px solid',
                        borderColor: '#FFFFFF',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            letterSpacing: '0.15em',
                            mb: 1,
                            display: 'block',
                        }}
                    >
                        🔬 LIMITED RESEARCH ACCESS BONUS
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            mb: 3,
                            fontWeight: 700,
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            color: '#FFFFFF',
                            lineHeight: 1.3,
                        }}
                    >
                        Unlock Additional Study Material From the Same High-Consistency Batch
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.95)',
                            mb: 2.5,
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            textAlign: 'left',
                        }}
                    >
                        When you download the guide, you'll get exclusive access to a specialized supply arrangement for two of the most requested research peptides.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.95)',
                            mb: 2.5,
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            textAlign: 'left',
                        }}
                    >
                        This extended-supply access gives you <strong style={{ color: '#FFFFFF' }}>more material from the exact same validated production run</strong>—a major advantage for longer studies, multi-phase experiments, or any work where minimizing variability actually matters.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            mb: 3,
                            fontSize: '0.9375rem',
                            lineHeight: 1.7,
                            textAlign: 'left',
                        }}
                    >
                        This arrangement isn't offered publicly and isn't listed on our website.<br />
                        It's reserved exclusively for researchers who go deeper into understanding peptide quality.
                    </Typography>

                    <Box
                        sx={{
                            display: 'inline-block',
                            px: 4,
                            py: 1.5,
                            backgroundColor: '#FFFFFF',
                            color: '#000000',
                            borderRadius: 1,
                            fontWeight: 700,
                            fontSize: '0.9375rem',
                        }}
                    >
                        Exclusive Access for Guide Readers
                    </Box>
                </Box>

                {/* Email Form */}
                <Box
                    sx={{
                        maxWidth: '500px',
                        mx: 'auto',
                        mb: 3,
                        p: 4,
                        backgroundColor: '#FAFAFA',
                        borderRadius: 2,
                        border: '1px solid #E0E0E0',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 3,
                            fontWeight: 600,
                            fontSize: '1.25rem',
                            textAlign: 'center',
                        }}
                    >
                        Get Instant Access (FREE)
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            mb: 2,
                        }}
                    >
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            size="medium"
                            sx={{ backgroundColor: '#FFFFFF' }}
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            size="medium"
                            sx={{ backgroundColor: '#FFFFFF' }}
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
                            size="medium"
                            sx={{ backgroundColor: '#FFFFFF' }}
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
                            size="medium"
                            sx={{ backgroundColor: '#FFFFFF' }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isSubmitting}
                            sx={{
                                py: 1.75,
                                fontSize: '1.0625rem',
                                fontWeight: 600,
                                backgroundColor: '#000000',
                                '&:hover': {
                                    backgroundColor: '#333333',
                                },
                            }}
                        >
                            {isSubmitting ? 'Processing...' : 'Get Instant Access'}
                        </Button>
                    </Box>

                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            textAlign: 'center',
                            color: 'text.secondary',
                            fontSize: '0.875rem',
                        }}
                    >
                        No credit card. No signup fees. Just practical quality assurance in your inbox.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
