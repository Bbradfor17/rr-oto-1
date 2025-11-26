import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { EbookPage, OTO1 } from "./pages";

// When hosted in WordPress, this app is mounted on the /revolve-ebook-offer/ page.
// We use a basename so React Router treats that URL as "/" inside the SPA,
// which is why the landing app (that doesn't use react-router) "just works".
const BASENAME = "/revolve-ebook-offer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={BASENAME}>
        <Routes>
          <Route path="/" element={<EbookPage />} />
          <Route path="/oto" element={<OTO1 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
