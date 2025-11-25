import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import { OTO1 } from './pages/OTO1.tsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<OTO1 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
