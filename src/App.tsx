import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import LandingPage from './pages/LandingPage';
import OTO1 from './pages/OTO1';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/oto-1" element={<OTO1 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
