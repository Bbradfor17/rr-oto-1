import { Box, Container, Typography } from "@mui/material";
import { SignupCapture } from "./SignupCapture";

export const SignupForm = () => {
  return (
    <Box
      id="signup"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#000000",
        color: "#FFFFFF",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: "#FFFFFF",
              fontSize: { xs: "2rem", md: "2.5rem" },
              letterSpacing: "-0.01em",
              fontFamily: '"Inter", serif',
            }}
          >
            Get Early Access
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "34.375rem",
              mx: "auto",
            }}
          >
            Be the first to know when Revolve Research launches. Get exclusive
            updates and early access.
          </Typography>
        </Box>

        <SignupCapture
          variant="dark"
          successMessage="Thank you for your interest. Redirecting you to your exclusive offer..."
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
      </Container>
    </Box>
  );
};
