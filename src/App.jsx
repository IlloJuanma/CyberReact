import Header from './components/Header/Header.jsx';
import React from './components/React/React.jsx';
import ComponentSection from './components/ComponentSection/ComponentSection.jsx';
import BenefitsSection from './components/BenefitsSection/BenefitsSection.jsx';
import CasesSection from './components/CasesSection/CasesSection.jsx';

import Footer from './components/Footer/Footer.jsx';

function App() {
  // -------------------------- APP --------------------------
  return (
    <>
      <Header />
      <React />
      <ComponentSection />
      <BenefitsSection />
      <CasesSection />
      <Footer />
    </>
  )
}

export default App
