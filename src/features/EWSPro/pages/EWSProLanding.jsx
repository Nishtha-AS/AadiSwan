import React from 'react';
import Footer from '../../../components/Footer';
import './EWSProLanding.css';

import SiteNavigation from '../../../components/SiteNavigation';
import '../../../components/SiteNavigation.css';

import EWSProHeroSection from '../components/EWSProHeroSection';
import ProductOverview from '../components/ProductOverview';
import InputDesign from '../components/InputDesign';
import ApiEcosystem from '../components/ApiEcosystem';
import IndustriesUseCases from '../components/IndustriesUseCases';
import FAQSection from '../components/FAQSection';

import credProLogo from '../../../assets/CredPro_logo.png';
import cadProLogo from '../../../assets/CADPro_logo.png';
import camProLogo from '../../../assets/CAMPro_logo.png';
import esmsProLogo from '../../../assets/ESMSPro_logo.png';
import ewsProLogo from '../../../assets/EWSPro_logo.png';

import underwritingStudioLogo from '../../../assets/underwriting_studio_logo.png';
import dmteLogo from '../../../assets/DMTE_Logo.png';
import automatedDecisioningLogo from '../../../assets/automated_decisioning.png';
import covenantManagementLogo from '../../../assets/convenant_management.png';
import supportWorkflowLogo from '../../../assets/support_workflow_logo.png';
import tpdLogo from '../../../assets/TPD_Logo.png';

import workingCapitalLogo from '../../../assets/WCM_logo.jpg';
import supplyChainLogo from '../../../assets/supply_chain_logo.png';
import projectFinanceLogo from '../../../assets/project_finance_logo.png';
import lapLogo from '../../../assets/load_against_property_logo.png';
import nbfcLogo from '../../../assets/NBFC_logo.png';

const products = [
  { logo: credProLogo, name: 'AS CredPro', nameShort: 'CredPro', desc: 'Automates end-to-end lending processes for faster, compliant credit decisions.' },
  { logo: cadProLogo,  name: 'AS CADPro',  nameShort: 'CADPro',  desc: 'Simplifies credit administration with seamless, transparent workflows.' },
  { logo: camProLogo,  name: 'AS CAMPro',  nameShort: 'CAMPro',  desc: 'AI-powered engine for smarter, insight-driven credit appraisals.' },
  { logo: esmsProLogo, name: 'AS ESMSPro', nameShort: 'ESMSPro', desc: 'Enables responsible lending with ESG-focused risk assessments.' },
  { logo: ewsProLogo,  name: 'AS EWSPro',  nameShort: 'EWSPro',  desc: 'Provides early warning signals to mitigate credit risks proactively.' },
];

const solutions = [
  { label: 'Underwriting Studio',                          icon: underwritingStudioLogo },
  { label: 'Document Management and Template Engine',      icon: dmteLogo },
  { label: 'Automated Decisioning', highlighted: true,     icon: automatedDecisioningLogo },
  { label: 'Covenant Management',                          icon: covenantManagementLogo },
  { label: 'Support Workflows- Legal, Valuation and more', icon: supportWorkflowLogo },
  { label: 'Third Party Integrations',                     icon: tpdLogo },
];

const assetClasses = [
  { label: 'Working Capital Loans', icon: workingCapitalLogo },
  { label: 'Supply Chain Finance',  icon: supplyChainLogo    },
  { label: 'Project Finance',       icon: projectFinanceLogo },
  { label: 'Loan Against Property', icon: lapLogo            },
  { label: 'NBFC Funding',          icon: nbfcLogo           },
];

export default function EWSProLanding() {
  return (
    <div className="landing-page" style={{ '--nav-h': '88px' }}>
      <SiteNavigation
        variant="ewspro"
        overlay
        brandHref="/"
        leadingItems={[ { label: 'Home', href: '/' } ]}
        products={products}
        solutions={solutions}
        solutionsSecondary={assetClasses}
        trailingItems={[
          { label: 'About Us',  href: '/about' },
          { label: 'Blog',      href: '/blog'  },
          { label: 'Contact Us',href: '/contact' }
        ]}
      />

      <EWSProHeroSection />
      <ProductOverview />
      <InputDesign />
      <ApiEcosystem />
      <IndustriesUseCases />
      <FAQSection />

      <Footer />
    </div>
  );
}
