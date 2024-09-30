import './Component.css';

export default function Components({ onClick, isSelected, children }) {
    return (
        <li>
            <button className={`${isSelected ? 'active' : ''} custom-button`} onClick={onClick}>{children}</button>
        </li>
    )
}