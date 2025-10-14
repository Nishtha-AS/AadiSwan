import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './features/home/pages/LandingPage';
import CredProLanding from './features/credpro/pages/CredProLanding';
import AboutPage from './features/about/pages/AboutPage';
import ContactPage from './features/contact/pages/ContactPage';
import CADProLanding from './features/CADPro/pages/CADProLanding';
import CAMProLanding from './features/CAMPro/pages/CAMProLanding';

import WorkingCapitalLoans from './features/AssetClasses/WorkingCapital/WorkingCapitalLoans';
import SupplyChainFinance from './features/AssetClasses/SupplyChainFinance/SupplyChainFinance';
import ProjectFinance from './features/AssetClasses/ProjectFinance/ProjectFinance';
import './App.css';
import LoanAgainstProperty from './features/AssetClasses/LAP/LoanAgainstProperty'; // Keep this line

import NBFCFunding from './features/AssetClasses/NBFCFunding/NBFCFunding';
import UnderwritingStudio from './features/Solutions/UnderwritingStudio/UnderwritingStudio';
import DocumentManagement from './features/Solutions/dmte/DocumentManagement';
import AutomatedDecisioning from './features/Solutions/ade/AutomatedDecisioning';
import CovenantManagement from './features/Solutions/covenant/CovenantManagement';
import ThirdPartyIntegrations from './features/Solutions/integrations/ThirdPartyIntegrations';
import SupportWorkflows from './features/Solutions/support/SupportWorkflows';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* CredPro page route */}
          <Route path="/credpro" element={<CredProLanding />} />

          {/* CADPro page route */}
          <Route path="/cadpro" element={<CADProLanding />} />

          {/* CAMPro page route */}
          <Route path="/campro" element={<CAMProLanding />} />

          {/* About Us page route */}
          <Route path="/aboutUs" element={<AboutPage />} />

          {/* Contact page route */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Asset Classes and Solutions route */}
          <Route path="/workingcapital" element={<WorkingCapitalLoans />} />
          <Route path="/supplychain" element={<SupplyChainFinance />} />
          <Route path="/projectfinance" element={<ProjectFinance />} />
          <Route path="/lap" element={<LoanAgainstProperty />} />
          <Route path="/nbfcfunding" element={<NBFCFunding />} />
          <Route path="/underwriting" element={<UnderwritingStudio />} />
          <Route path="/documentmanagement" element={<DocumentManagement />} />
          <Route path="/automateddescision" element={<AutomatedDecisioning />} />
          <Route path="/covenant" element={<CovenantManagement />} />
          <Route path="/support" element={<SupportWorkflows />} />
          <Route path="/integrations" element={<ThirdPartyIntegrations />} />

          {/* 404 fallback route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;