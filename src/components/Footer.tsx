import { Box, Container, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: "#FAFAFA",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src="/logo.jpg"
              alt="Revolve Research"
              sx={{ height: 32, opacity: 0.8 }}
            />
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Revolve Research. All rights
              reserved.
            </Typography>
          </Box>

          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              color="text.secondary"
              underline="hover"
              sx={{ fontSize: "0.875rem" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              color="text.secondary"
              underline="hover"
              sx={{ fontSize: "0.875rem" }}
            >
              Terms of Service
            </Link>
            <Link
              href="mailto:info@revolveresearch.com"
              color="text.secondary"
              underline="hover"
              sx={{ fontSize: "0.875rem" }}
            >
              Contact
            </Link>
          </Stack>
        </Stack>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", textAlign: "center", mt: 3 }}
        >
          revolveresearch.com
        </Typography>
      </Container>
    </Box>
  );
}
