import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const benefits = [
  {
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    title: "Hidden Quality Markers",
    description:
      "Learn the advanced quality indicators pharmaceutical companies use that go far beyond standard COA testing.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
    title: "Testing Gap Analysis",
    description:
      "Discover the critical blind spots in standard certificates that could compromise your research integrity.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    title: "Advanced Verification Methods",
    description:
      "Master the techniques used by leading research institutions to validate peptide quality and purity.",
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 40 }} />,
    title: "Real-World Case Studies",
    description:
      "See documented examples of COA failures and how they were identified using advanced analysis.",
  },
];

export default function Benefits() {
  return (
    <Box
      id="benefits"
      sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#FAFAFA" }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              letterSpacing: "-0.01em",
            }}
          >
            What You'll Learn
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Essential knowledge every peptide researcher needs to ensure
            research quality
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 3,
            justifyContent: "center",
          }}
        >
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "#FFFFFF",
                transition: "all 0.2s ease",
                boxShadow: "none",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  borderColor: "primary.main",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  flexGrow: 1,
                  justifyContent: "center",
                  "&:last-child": {
                    pb: 4,
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{benefit.icon}</Box>

                <Typography
                  variant="h6"
                  sx={{ mb: 1.5, fontWeight: 600, fontSize: "1.125rem" }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
