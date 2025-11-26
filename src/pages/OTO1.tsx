import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import CheckoutForm from "../components/CheckoutForm";
import tirzepatideImage from "../assets/tirzepatide-image.jpeg";
import semaglutideImage from "../assets/semaglutide-image.jpeg";
import { BundleOption } from "../components/BundleOption";

export const OTO1 = () => {
  const [selectedBundle, setSelectedBundle] = useState<"bundle1" | "bundle2">(
    "bundle1",
  );

  const handleSelect = (bundle: "bundle1" | "bundle2") => {
    setSelectedBundle(bundle);
  };

  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 8 }}>
      <Box sx={{ textAlign: "center", mb: 4.8 }}>
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

      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: "inline-block",
            maxWidth: "900px",
            width: "100%",
            bgcolor: "background.paper",
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
                imageSrc={tirzepatideImage}
                handleSelect={handleSelect}
                selectedBundle={selectedBundle}
              />
            </Grid>

            {/* Bundle 2 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <BundleOption
                value="bundle2"
                title="Semaglutide 10mg Bundle"
                subtitle="Buy 2 Get 3 Free Vials (5 Total) - Free Shipping & Handling"
                imageLabel="Semaglutide Image"
                imageSrc={semaglutideImage}
              />
            </Grid>
          </Grid>

          <CheckoutForm selectedBundle={selectedBundle} />

          <Box sx={{ mt: 4 }}>
            <Button color="inherit">No thanks, I don't want to upgrade</Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
