import './Benefits.css';

export default function Benefits({title, description}){
    return (
        <li className='benefits-li'>
            <h3 className="benefit-title">{title}</h3>
            <p className="benefit-description">{description}</p>
        </li>
    );
}