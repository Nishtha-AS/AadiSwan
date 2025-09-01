import React, { useState } from 'react';
import CredProHeroSection from '../components/CredProHeroSection';
import ProductOverview from '../components/ProductOverview';
import InputDesign from '../components/InputDesign';
import ApiEcosystem from '../components/ApiEcosystem';
import IndustriesUseCases from '../components/IndustriesUseCases';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import './CredProLanding.css';

// ------- Import Assets (Same as Home Page) ------- 
// Products
import credProLogo from '../../../assets/CredPro_logo.png';
import cadProLogo from '../../../assets/CADPro_logo.png';
import camProLogo from '../../../assets/CAMPro_logo.png';
import esmsProLogo from '../../../assets/ESMSPro_logo.png';
import ewsProLogo from '../../../assets/EWSPro_logo.png';

// Solutions icons
import underwritingStudioLogo from '../../../assets/underwriting_studio_logo.png';
import dmteLogo from '../../../assets/DMTE_Logo.png';
import automatedDecisioningLogo from '../../../assets/automated_decisioning.png';
import covenantManagementLogo from '../../../assets/convenant_management.png';
import supportWorkflowLogo from '../../../assets/support_workflow_logo.png';
import tpdLogo from '../../../assets/TPD_Logo.png';

// Asset classes
import workingCapitalIcon from '../../../assets/WCM_logo.jpg';
import supplyChainIcon from '../../../assets/supply_chain_logo.png';
import projectFinanceIcon from '../../../assets/project_finance_logo.png';
import lapIcon from '../../../assets/load_against_property_logo.png';
import nbfcFundingIcon from '../../../assets/NBFC_logo.png';

// Promo image
import leadingLoanImg from '../../../assets/leading_loan_management_img.png';

const CredProLanding = () => {
  // Dropdown state management (same as home page)
  const [openProducts, setOpenProducts] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  // Products data (same as home page)
  const products = [
    {
      logo: credProLogo,
      name: 'AS CredPro',
      desc: 'Automates end-to-end lending processes for faster, compliant credit decisions.',
    },
    {
      logo: cadProLogo,
      name: 'AS CADPro',
      desc: 'Simplifies credit administration with seamless, transparent workflows.',
    },
    {
      logo: camProLogo,
      name: 'AS CAMPro',
      desc: 'AI-powered engine for smarter, insight-driven credit appraisals.',
    },
    {
      logo: esmsProLogo,
      name: 'AS ESMSPro',
      desc: 'Enables responsible lending with ESG-focused risk assessments.',
    },
    {
      logo: ewsProLogo,
      name: 'AS EWSPro',
      desc: 'Provides early warning signals to mitigate credit risks proactively.',
    },
  ];

  // Split products into columns (3 + 2 layout, same as home)
  const productCols = [products.slice(0, 3), products.slice(3)];

  // Solutions data (same as home page)
  const solutions = [
    { icon: underwritingStudioLogo, label: 'Underwriting Studio' },
    { icon: dmteLogo, label: 'Document Management and Template Engine' },
    { icon: automatedDecisioningLogo, label: 'Automated Decisioning', highlighted: true },
    { icon: covenantManagementLogo, label: 'Covenant Management' },
    { icon: supportWorkflowLogo, label: 'Support Workflows- Legal, Valuation and more' },
    { icon: tpdLogo, label: 'Third Party Integrations' },
  ];

  // Asset Classes data (same as home page)
  const assetClasses = [
    { icon: workingCapitalIcon, label: 'Working Capital Loans' },
    { icon: supplyChainIcon, label: 'Supply Chain Finance' },
    { icon: projectFinanceIcon, label: 'Project Finance', highlighted: true },
    { icon: lapIcon, label: 'Loan Against Property' },
    { icon: nbfcFundingIcon, label: 'NBFC Funding' },
  ];

  // Toggle functions (mutual exclusion, same as home)
  const toggleProducts = () => {
    setOpenProducts(v => !v);
    setOpenSolutions(false);
  };

  const toggleSolutions = () => {
    setOpenSolutions(v => !v);
    setOpenProducts(false);
  };

  // Pass all dropdown data and functions to CredProHeroSection
  const dropdownProps = {
    products,
    productCols,
    solutions,
    assetClasses,
    openProducts,
    openSolutions,
    toggleProducts,
    toggleSolutions,
    leadingLoanImg
  };

  return (
    <div className="landing-page">
      <CredProHeroSection {...dropdownProps} />
      <ProductOverview />
      <InputDesign />
      <ApiEcosystem />
      <IndustriesUseCases />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default CredProLanding;
