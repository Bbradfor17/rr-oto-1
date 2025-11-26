import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { EbookPage, OTO1 } from "./pages";

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
