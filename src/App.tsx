import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import ServiceAreas from './pages/ServiceAreas';
import Quote from './pages/Quote';

function App() {
  return (
    <Router basename="/Happy2Clean">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
