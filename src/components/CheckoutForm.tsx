import { useEffect, useState } from "react";
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
  Alert,
} from "@mui/material";
import { createCheckoutOrder } from "../services";

const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_API_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

interface CheckoutFormProps {
  selectedBundle: "bundle1" | "bundle2";
}

const CheckoutForm = ({ selectedBundle }: CheckoutFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [legalChecked, setLegalChecked] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    if (document.getElementById("recaptcha-script")) return;
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.id = "recaptcha-script";
    document.head.appendChild(script);
  }, []);

  const executeRecaptcha = () =>
    new Promise<string | undefined>((resolve) => {
      if (!RECAPTCHA_SITE_KEY) {
        resolve(undefined);
        return;
      }

      const attempt = (retries = 10) => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              ?.execute(RECAPTCHA_SITE_KEY, { action: "checkout" })
              .then((token) => resolve(token))
              .catch(() => resolve(undefined));
          });
        } else if (retries > 0) {
          setTimeout(() => attempt(retries - 1), 200);
        } else {
          resolve(undefined);
        }
      };

      attempt();
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.street ||
      !formData.city ||
      !formData.state ||
      !formData.zip
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required contact and shipping fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!legalChecked) {
      setStatus({
        type: "error",
        message: "You must acknowledge the legal disclaimer to continue.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const recaptchaToken = await executeRecaptcha();

      const response = await createCheckoutOrder({
        bundle: selectedBundle,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
        },
        recaptchaToken,
      });

      if (response.checkoutUrl) {
        window.location.href = response.checkoutUrl;
      } else {
        setStatus({
          type: "success",
          message:
            "Your checkout session has been created. Please complete your payment on the next page.",
        });
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "There was an error starting checkout. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper
      elevation={3}
      component="form"
      onSubmit={handleSubmit}
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
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Phone Number (optional)"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Grid>

        {/* Shipping Address */}
        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Shipping Address
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Street Address"
            name="street"
            required
            value={formData.street}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="City"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="State"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Zip Code"
            name="zip"
            required
            value={formData.zip}
            onChange={handleChange}
          />
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
              <Typography variant="body2">$300.00</Typography>
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
                $300.00
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
          {status.message && (
            <Box sx={{ mb: 2 }}>
              <Alert severity={status.type === "success" ? "success" : "error"}>
                {status.message}
              </Alert>
            </Box>
          )}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={!legalChecked || isSubmitting}
            sx={{ py: 2, fontSize: "1.1rem" }}
          >
            {isSubmitting
              ? "Starting Secure Checkout..."
              : "Complete Order - $300.00"}
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
