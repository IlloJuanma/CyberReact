import './Cases.css';

export default function Cases({title, description}){
    return (
        <li className='cases-list'>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}