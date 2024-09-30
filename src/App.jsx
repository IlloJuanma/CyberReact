import Header from './components/Header/Header.jsx';
import React from './components/React/React.jsx';
import ComponentSection from './components/ComponentSection/ComponentSection.jsx';
import BenefitsSection from './components/BenefitsSection/BenefitsSection.jsx';
import CasesSection from './components/CasesSection/CasesSection.jsx';
import ApiTutorial from './components/ApiTutorial/ApiTutorial.jsx';

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
      <ApiTutorial />
      <Footer />
    </>
  )
}
export default App