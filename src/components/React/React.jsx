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
                <li>1. Desarrollo de Aplicaciones Web</li>
                <li>2. Desarrollo de Aplicaciones Móviles (React Native)</li>
                <li>3. Popularidad en Startups y Empresas Grandes</li>
                <li>4. Composición de Componentes para UI</li>
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