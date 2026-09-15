import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index'; // .tsx extension is optional in imports
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Terminals from './pages/Terminals';
import Results from './pages/Results';
import Architecture from './pages/Architecture';
import Simulation from './pages/Simulation';
import LanguageProvider from './context/languageContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop /> 
      <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/terminals" element={<Terminals />} />
            <Route path="/results" element={<Results />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/simulation" element={<Simulation />} />
           

        
          </Routes>
        </main>
        <Footer />
      </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;