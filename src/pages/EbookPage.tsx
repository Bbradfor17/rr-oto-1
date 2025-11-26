import { Box } from "@mui/material";
import { Hero, WhatsInside, LeadForm } from "../components";
import heroBg from "../assets/revolve-ebook-offer/hero-bg.png";

export const EbookPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(245,245,245,0.9))",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 5 },
          textAlign: "center",
          width: "100%",
        }}
      >
        <Hero />
        <WhatsInside />
        <LeadForm />
      </Box>
    </Box>
  );
};
