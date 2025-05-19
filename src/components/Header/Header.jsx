import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style/Header.css';
import Menu from '../Menu/Menu';
import Theme from '../Tools/Theme';

function Header() {
	const [t] = useTranslation("global");
	const [open, setOpen] = useState(true);
	const [activeSection, setActiveSection] = useState();
	const [scrolled, setScrolled] = useState(false); // Nuevo estado para el scroll
	const observerRef = useRef(null);
	const location = useLocation();

	// Observer para secciones activas
	useEffect(() => {
		const initObserver = () => {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			}, { threshold: 0.4 });

			const sections = ["home", "About", "Skills", "Education", "Experience", "Projects", "Contact"];
			sections.forEach(id => {
				const element = document.getElementById(id);
				if (element) observer.observe(element);
			});

			observerRef.current = observer;
		};

		if (location.state?.scrollTo) {
			setTimeout(() => {
				initObserver();
			}, 800);
		} else {
			initObserver();
		}

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, [location]);

	// Listener de scroll
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div>
			<header className={`Header ${scrolled ? 'scrolled' : ''}`}>
				<nav className="Header_nav">
					<Link to="/#home" onClick={() => document.querySelector('#home').scrollIntoView({ behavior: 'smooth' })}>
						<h1 className='Header_nav-h1'>
							<span>{"<Y.M/>"}</span>
						</h1>
					</Link>
				</nav>
				<nav className="Header_nav1">
					<div className='Theme_view'>
					<Theme />
					</div>
					<div className='Menu_view'>
						<i onClick={() => setOpen(false)} className={open ? 'bx bx-menu' : "Clear"}></i>
					    <i onClick={() => setOpen(true)} className={open ? "Clear" : 'bx bx-x'}></i>
					</div>
				</nav>
				<nav className="Header_nav2">
					{["home", "About", "Skills", "Education", "Experience", "Projects", "Contact"].map((id) => (
						<Link key={id} to={`/#${id}`} onClick={() => document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })}>
							<li className={activeSection === id ? "activo" : "Header_nav2-li"}>{t(`Header.${id.toLowerCase()}`)}</li>
						</Link>
					))}
				</nav>
			</header>
				<Menu open={open} setOpen={setOpen} t={t} activeSection={activeSection} />
			
		</div>
	);
}

export default Header;
