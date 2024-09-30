import { benefitsData } from '../../js/benefitsData';
import React from 'react';
import Benefits from '../Benefits/Benefits';
import './BenefitsSection.css';

export default function BenefitsSection() {
    return (
        <section className='benefits-section'>
            <h2 className='section-title'>Beneficios de Usar React</h2>
            <p className='section-description'>
                React ofrece una serie de ventajas que lo han convertido en una de las bibliotecas de JavaScript más populares para el desarrollo de interfaces de usuario.
                A continuación, exploramos algunos de sus principales beneficios.
            </p>
            <ul className='benefits-list'>
               {Object.keys(benefitsData).map((key) => {
                const { title, description } = benefitsData[key];
                    return (
                        <Benefits key={key} title={title} description={description} />
                    )
               })}
            </ul>

        </section>
    );
}