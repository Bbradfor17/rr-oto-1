import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Divider,
} from "@mui/material";

interface CheckoutFormProps {
  selectedBundle: "bundle1" | "bundle2";
}

const CheckoutForm = ({ selectedBundle }: CheckoutFormProps) => {
  const [legalChecked, setLegalChecked] = useState(false);

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, mt: 6, bgcolor: "background.paper", textAlign: "left" }}
    >
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Secure Checkout
      </Typography>

      <Grid container spacing={3}>
        {/* Contact Info */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Full Name" required />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Email Address" type="email" required />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField fullWidth label="Phone Number" type="tel" required />
        </Grid>

        {/* Shipping Address */}
        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Shipping Address
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField fullWidth label="Street Address" required />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="City" required />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField fullWidth label="State" required />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField fullWidth label="Zip Code" required />
        </Grid>

        {/* Payment Info */}
        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Payment Information
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Card Number"
            required
            placeholder="0000 0000 0000 0000"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Expiry Date"
            required
            placeholder="MM/YY"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="CVC" required placeholder="123" />
        </Grid>

        {/* Order Summary */}
        <Grid size={{ xs: 12 }} sx={{ mt: 3 }}>
          <Paper variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
            <Typography variant="subtitle1" gutterBottom>
              Order Summary
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body2">
                {selectedBundle === "bundle1"
                  ? "Tirzepatide 10mg Bundle"
                  : "Semaglutide 10mg Bundle"}{" "}
                (Buy 2 Get 3 Free)
              </Typography>
              <Typography variant="body2">$197.00</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body2">Shipping & Handling</Typography>
              <Typography variant="body2" color="success.main">
                FREE
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Total
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                $197.00
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Legal Disclaimer */}
        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              borderColor: "warning.main",
              bgcolor: "warning.light",
              opacity: 0.1,
            }}
          >
            {/* Background opacity hack, better to use alpha color */}
          </Paper>
          <Box
            sx={{
              p: 2,
              border: 1,
              borderColor: "warning.main",
              borderRadius: 1,
              bgcolor: "rgba(237, 108, 2, 0.05)",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={legalChecked}
                  onChange={(e) => setLegalChecked(e.target.checked)}
                  color="warning"
                />
              }
              label={
                <Typography variant="body2" color="text.secondary">
                  I acknowledge that the products purchased from Revolve
                  Research are strictly for{" "}
                  <strong>laboratory research purposes only</strong> and are not
                  for human consumption, ingestion, or clinical use. I
                  understand that these products have not been evaluated by the
                  FDA and are not intended to diagnose, treat, cure, or prevent
                  any disease. I agree to handle these materials in accordance
                  with all applicable laws and safety regulations.
                </Typography>
              }
            />
          </Box>
        </Grid>

        {/* Submit Button */}
        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            disabled={!legalChecked}
            sx={{ py: 2, fontSize: "1.1rem" }}
          >
            Complete Order - $197.00
          </Button>
          <Box sx={{ textAlign: "center", mt: 1 }}>
            <Typography variant="caption" color="text.secondary">
              <span role="img" aria-label="lock">
                🔒
              </span>{" "}
              SSL Secure Checkout
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CheckoutForm;
