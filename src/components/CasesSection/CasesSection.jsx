import { casesData } from "../../js/CasesData";
import Cases from "../Cases/Cases";
import './CasesSection.css';

export default function CasesSection() {
    return (
        <section className="case-studies-section">
            <h2 className="section-title">Casos de Estudio</h2>
            <p className="section-description">
                A continuación, exploramos algunos casos de
                estudio donde React ha demostrado su eficacia
                y versatilidad en proyectos reales.
            </p>
            <ul className="case-studies">
                {Object.keys(casesData).map((key) => {
                    const { title, description } = casesData[key];
                    return (
                        <Cases key={key} title={title} description={description}></Cases>
                    )
                })}
            </ul>
        </section>
    );

}