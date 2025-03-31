import React from 'react';
import './style/Menu.css';
import { Link } from 'react-router-dom';

const Menu = ({ open, t, setOpen, activeSection }) => {
    return (
        <nav className={open ? "Clear" : "Menu"}>
            <ul className={open ? 'Clears' : "Menu1"}>
                {["home", "About", "Skills", "Education", "Experience", "Projects", "Contact"].map((id) => (
                    <Link key={id} to={`/#${id}`} onClick={() => document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })}>
						<li className={activeSection === id ? "activo" : "Header_nav2-li"}>{t(`Header.${id.toLowerCase()}`)}</li>
                    </Link>
                ))}
				
            </ul>
        </nav>
    );
};

export default Menu;
