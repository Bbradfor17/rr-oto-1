import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Alert,
  Typography,
  CircularProgress,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { createSignupUser } from "../services";

type Variant = "light" | "dark";

interface SignupCaptureProps {
  variant: Variant;
  successMessage: string;
  buttonText?: string;
  sx?: SxProps<Theme>;
}

const SIGNUP_SUCCESS_EVENT = "landingSignupSuccess";
const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_API_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

export const SignupCapture = ({
  variant,
  successMessage,
  buttonText = "Sign Up for Early Access",
  sx,
}: SignupCaptureProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    acceptMarketing: true,
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handler = () => setIsSuccess(true);
    window.addEventListener(SIGNUP_SUCCESS_EVENT, handler);
    return () => window.removeEventListener(SIGNUP_SUCCESS_EVENT, handler);
  }, []);

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
              ?.execute(RECAPTCHA_SITE_KEY, { action: "signup" })
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
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "acceptMarketing" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Validate required fields (phone is optional)
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha();
      const response = await createSignupUser({ ...formData, recaptchaToken });

      // If the API indicates success, navigate to the OTO route
      if (response?.success) {
        window.dispatchEvent(new Event(SIGNUP_SUCCESS_EVENT));
        navigate("/oto");
        return;
      }

      // Fallback: show success message without navigation
      setIsSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        acceptMarketing: true,
      });
      setStatus({ type: "success", message: successMessage });
    } catch (error) {
      setStatus({
        type: "error",
        message: `There was an error with the signup process. ${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLight = variant === "light";

  const containerSx: SxProps<Theme> = isLight
    ? {
        maxWidth: "30rem",
        mx: "auto",
        p: 2.5,
        mb: "16px !important",
        backgroundColor: "black",
        backdropFilter: "blur(0.5rem)",
        borderRadius: "16px !important",
        boxShadow: "0 0.25rem 1.5rem rgba(0,0,0,0.2)",
      }
    : {
        p: 4,
        backgroundColor: "#FFFFFF",
        maxWidth: "34.375rem",
        mx: "auto",
        borderRadius: "16px !important",
        border: "0.0625rem solid rgba(0, 0, 0, 0.06)",
        boxShadow: "0 0.75rem 2.5rem rgba(0, 0, 0, 0.35)",
      };

  const lightFieldSx = {
    backgroundColor: "#1A1A1A",
    borderRadius: 1,
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#1A1A1A",
      color: "white",
      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
      "&:hover fieldset": { borderColor: "white" },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color: "white",
      },
      "&.Mui-focused input": { color: "white" },
    },
    "& input": {
      color: "white",
      backgroundColor: "#1A1A1A",
      borderRadius: 1,
      padding: "0.875rem",
      "&::placeholder": {
        color: "white",
        opacity: 1,
      },
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 6.25rem #1A1A1A inset",
        WebkitTextFillColor: "white",
        caretColor: "white",
        borderRadius: "inherit",
      },
    },
  };

  const darkFieldSx = {
    "&:hover": {
      cursor: "pointer",
    },
  };
  const fields = [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "First Name *",
      autoComplete: "given-name",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Last Name *",
      autoComplete: "family-name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "Email Address *",
      autoComplete: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Phone Number (optional)",
      autoComplete: "tel",
      type: "tel",
      required: false,
    },
  ] as const;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ ...containerSx, ...sx }}
    >
      {isSuccess ? (
        <Typography
          sx={{
            color: isLight ? "white" : "text.primary",
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          {successMessage}
        </Typography>
      ) : (
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {fields.slice(0, 2).map((field) => (
              <TextField
                key={field.name}
                fullWidth
                name={field.name}
                value={
                  (formData as Record<string, string | boolean>)[
                    field.name
                  ] as string
                }
                onChange={handleChange}
                required
                variant="outlined"
                autoComplete={field.autoComplete}
                type={field.type}
                label={isLight ? undefined : field.label}
                placeholder={isLight ? field.placeholder : undefined}
                sx={isLight ? lightFieldSx : darkFieldSx}
              />
            ))}
          </Stack>

          {fields.slice(2).map((field) => (
            <TextField
              key={field.name}
              fullWidth
              name={field.name}
              value={
                (formData as Record<string, string | boolean>)[
                  field.name
                ] as string
              }
              onChange={handleChange}
              required
              variant="outlined"
              autoComplete={field.autoComplete}
              type={field.type}
              label={isLight ? undefined : field.label}
              placeholder={isLight ? field.placeholder : undefined}
              sx={isLight ? lightFieldSx : darkFieldSx}
            />
          ))}

          <FormControlLabel
            control={
              <Checkbox
                name="acceptMarketing"
                checked={formData.acceptMarketing}
                onChange={handleChange}
                sx={{
                  ...(isLight
                    ? {
                        color: "white",
                        "&.Mui-checked": { color: "white" },
                      }
                    : {}),
                }}
              />
            }
            label="I want to receive updates about Revolve Research products and news"
            sx={{
              color: isLight ? "white" : "text.primary",
              "& .MuiFormControlLabel-label": {
                fontSize: "0.875rem",
                textAlign: "left",
              },
            }}
          />

          {status.message && status.type === "error" && (
            <Alert severity="error">{status.message}</Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={isSubmitting}
            sx={{
              py: 1.75,
              fontSize: "1rem",
              borderRadius: "8px !important",
              fontWeight: 600,
              backgroundColor: isLight ? "white" : "#000000",
              color: isLight ? "black" : "white",
              "&:hover": {
                backgroundColor: isLight ? "white" : "#333333",
              },
              "&.Mui-disabled": {
                backgroundColor: isLight
                  ? "rgba(255,255,255,0.8) !important"
                  : "#555555 !important",
                color: isLight
                  ? "rgba(0,0,0,0.7) !important"
                  : "rgba(255,255,255,0.7) !important",
              },
            }}
          >
            {isSubmitting ? (
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <CircularProgress
                  size={20}
                  sx={{ color: isLight ? "black" : "white" }}
                />
                <Typography
                  variant="button"
                  sx={{
                    color: isLight ? "black" : "white",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  Processing…
                </Typography>
              </Stack>
            ) : (
              buttonText
            )}
          </Button>
        </Stack>
      )}
    </Box>
  );
};
