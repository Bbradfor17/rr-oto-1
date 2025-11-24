import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Hero from './components/Hero';
import WhatsInside from './components/WhatsInside';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <WhatsInside />
      <LeadForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
