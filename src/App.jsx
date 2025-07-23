import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Plans from '@/pages/Plans';
import ClientArea from '@/pages/ClientArea';
import Support from '@/pages/Support';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Helmet>
          <title>NetSpeed Pro - Internet Rápida para Sua Casa</title>
          <meta name="description" content="Provedor de internet de alta velocidade com planos a partir de R$ 49,90. Conexão estável, suporte 24h e instalação gratuita." />
        </Helmet>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/area-cliente" element={<ClientArea />} />
          <Route path="/suporte" element={<Support />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;