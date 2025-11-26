import { Box, Container, Typography, Stack } from "@mui/material";
import { SignupCapture } from "./SignupCapture";

export const LeadForm = () => {
  return (
    <Box
      id="lead-form"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#000000",
        color: "#FFFFFF",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              textAlign: "center",
            }}
          >
            Get the quality clarity guide researchers rely on
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              mx: "auto",
              mb: 3,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            Enter your email to get the guide + prelaunch peptide access
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ flexWrap: "wrap" }}
          >
            <Box
              sx={{
                px: 3,
                py: 1,
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              ✓ Free Guide
            </Box>
            <Box
              sx={{
                px: 3,
                py: 1,
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              ✓ Prelaunch Access
            </Box>
            <Box
              sx={{
                px: 3,
                py: 1,
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              ✓ No Spam, Ever
            </Box>
          </Stack>
        </Box>

        <SignupCapture
          variant="dark"
          successMessage="Success! Check your inbox for your free guide and prelaunch access details. Redirecting you to your exclusive offer..."
          buttonText="Get Instant Access"
          sx={{
            p: 4,
            backgroundColor: "#FFFFFF",
            maxWidth: "34.375rem",
            mx: "auto",
            borderRadius: "16px !important",
            border: "0.0625rem solid rgba(0, 0, 0, 0.06)",
            boxShadow: "0 0.75rem 2.5rem rgba(0, 0, 0, 0.35)",
          }}
        />

        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            color: "text.secondary",
            mt: 2,
          }}
        >
          We respect your privacy. Unsubscribe at any time.
        </Typography>
      </Container>
    </Box>
  );
};
