// componentsData.js
export const COMPONENT_DATA = {
    Estado: {
        title: "Estado",
        description: "Este componente utiliza estado local para manejar su propio estado.",
        code: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};`
    },
    Controlado: {
        title: "Controlado",
        description: "Este componente muestra un input controlado por React.",
        code: `import React, { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');
  
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};`
    },
    Efecto: {
        title: "Efecto",
        description: "Este componente utiliza efectos secundarios con useEffect.",
        code: `import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return <h1>{seconds} segundos</h1>;
};`
    }
};