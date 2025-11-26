import { Box, Container, Typography, Stack, Paper } from "@mui/material";

const testimonials = [
  {
    quote:
      "The 'Five Missing Contexts' chapter completely changed how I evaluate suppliers. I found gaps in my current vendor's process within 24 hours of reading.",
    author: "Dr. Sarah Chen",
    role: "Biotech Research",
  },
  {
    quote:
      "The Revolve 7-Point Quality Model gave me a framework I can actually use. No more guesswork when comparing peptide sources.",
    author: "Dr. Michael Torres",
    role: "Principal Investigator",
  },
  {
    quote:
      "Wish I'd had this before my last three failed experiments. The section on COA misinterpretations would've saved me months.",
    author: "Dr. Jennifer Liu",
    role: "Research Director",
  },
];

export default function SocialProof() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              letterSpacing: "-0.01em",
            }}
          >
            Trusted by Researchers Worldwide
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.125rem" }}
          >
            Real results from researchers who upgraded their quality validation
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            mb: 6,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "#FAFAFA",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "text.primary",
                }}
              >
                "{testimonial.quote}"
              </Typography>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {testimonial.author}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="center"
          sx={{ color: "text.secondary" }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              5,000+
            </Typography>
            <Typography variant="body2">Researchers</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              4.9/5
            </Typography>
            <Typography variant="body2">Average Rating</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              98%
            </Typography>
            <Typography variant="body2">Recommend</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
