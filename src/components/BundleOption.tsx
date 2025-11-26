import { Box, Typography, Radio } from "@mui/material";

export const BundleOption = ({
  value,
  title,
  subtitle,
  imageLabel,
  imageSrc,
  handleSelect,
  selectedBundle,
}: {
  value: "bundle1" | "bundle2";
  title: string;
  subtitle: string;
  imageLabel: string;
  handleSelect: (value: "bundle1" | "bundle2") => void;
  selectedBundle: "bundle1" | "bundle2";
  imageSrc: string;
}) => (
  <Box
    onClick={() => handleSelect(value)}
    sx={{
      border: 2,
      borderColor: selectedBundle === value ? "primary.main" : "divider",
      borderRadius: 2,
      p: 3,
      cursor: "pointer",
      transition: "all 0.2s",
      "&:hover": {
        borderColor: "primary.light",
        bgcolor: "action.hover",
      },
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box
      sx={{
        width: "100%",
        aspectRatio: "1 / 1",
        bgcolor: "#e0e0e0",
        mb: 2,
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={imageSrc}
        alt={imageLabel}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" paragraph>
      {subtitle}
    </Typography>

    <Box sx={{ mt: "auto", mb: 2 }}>
      <Typography variant="h5" color="primary" fontWeight="bold">
        $300
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textDecoration: "line-through", color: "error.main" }}
      >
        Retail: $600
      </Typography>
    </Box>

    <Radio
      checked={selectedBundle === value}
      onChange={() => handleSelect(value)}
      value={value}
      name="bundle-radio"
      sx={{ alignSelf: "center" }}
    />
  </Box>
);
