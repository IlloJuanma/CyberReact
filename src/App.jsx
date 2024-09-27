import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import React from './components/React/React.jsx';
import Components from './components/ComponentSection/Component.jsx';
import { COMPONENT_DATA } from './js/data.js';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [tabSelected, setTabSelected] = useState(null);
  function handleTabClick(selectedTab) {
    setTabSelected(selectedTab);
  }
  let tabContent = (
    <p>Elige una opción para saber más</p>
  );
  if (tabSelected) {
    tabContent = (
      <div className='tab-content'>
        <h3>{COMPONENT_DATA[tabSelected].title}</h3>
        <p>{COMPONENT_DATA[tabSelected].description}</p>
        <pre>
          <code>
            {COMPONENT_DATA[tabSelected].code}
          </code>
        </pre>
      </div>
    );
  };

  // -------------------------- APP --------------------------
  return (
    <>
      <Header />
      <React />
      <section className='components-section'>
        <h2>Componentes de React</h2>
        <menu>
          <Components isSelected={tabSelected === 'Estado'} onClick={() => handleTabClick("Estado")}>Componente de Estado</Components>
          <Components isSelected={tabSelected === 'Controlado'} onClick={() => handleTabClick("Controlado")}>Componente Controlado</Components>
          <Components isSelected={tabSelected === 'Efecto'} onClick={() => handleTabClick("Efecto")}>Componente de Efecto</Components>
        </menu>
        {tabContent}
      </section>
      <Footer />
    </>
  )
}

export default App
