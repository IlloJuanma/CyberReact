import './React.css';

export default function React() {
    return (
        <section className='react-section'>
            <h2 className='section-title'>¿Qué es React?</h2>
            <p className='section-description'>
                React es una biblioteca de JavaScript para construir interfaces de usuario.
                Permite desarrollar aplicaciones web de manera más eficiente y con un rendimiento optimizado,
                facilitando la creación de componentes reutilizables.
            </p>

            <h3 className='index-title'>
                Índice de Uso de React en el Mundo Laboral
            </h3>
            <ul className='usage-index'>
                <li>
                    <span>1. Desarrollo de Aplicaciones Web</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '90%' }}>90%</div>
                    </div>
                </li>
                <li>
                    <span>2. Desarrollo de Aplicaciones Móviles (React Native)</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}>70%</div>
                    </div>
                </li>
                <li>
                    <span>3. Popularidad en Startups y Empresas Grandes</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '85%' }}>85%</div>
                    </div>
                </li>
                <li>
                    <span>4. Composición de Componentes para UI</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '95%' }}>95%</div>
                    </div>
                </li>
            </ul>

            <h3 className='example-title'>
                Ejemplo de Componente Funcional en React
            </h3>
            <pre className='code-example'>
                <code>
                    {`// Componente funcional
                    export default function Greeting(){
                        return <h1>Hola, bienvenido a CyberReact!</h1>;
                    };
                    `
                    }
                </code>
            </pre>
            <h3 className='example-title'>
                Ejemplo de Componente de Clase en React
            </h3>
            <pre className='code-example'>
                <code>
                    {`// Componente de Clase
                    class Greeting extends React.Component {
                        render() {
                            return <h1>¡Hola, bienvenido a CyberReact!</h1>;
                        }
                    };
                    `
                    }
                </code>
            </pre>
        </section>
    );
};