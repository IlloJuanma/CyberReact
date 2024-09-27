import './Header.css';
import CyberReact_Logo from '../../assets/CR-logo-removeBg.png';

export default function Header(){
    return (
        <header className='cyberReact-header'>
            <div className="logo">
                <img src={CyberReact_Logo} alt="CyberReact_logo" />
            </div>
            <nav>
                <ul className='nav--list'>
                    <li><a href="#home">React</a></li>
                    <li><a href="#about">Components</a></li>
                    <li><a href="#gallery">Hooks</a></li>
                    <li><a href="#contact">Code</a></li>
                </ul>
            </nav>
        </header>
    );
}