import { Box } from "@mui/material";
import { Hero, WhatsInside, LeadForm } from "../components";

export const EbookPage = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 5 },
        textAlign: "center",
      }}
    >
      <Hero />
      <WhatsInside />
      <LeadForm />
    </Box>
  );
};
