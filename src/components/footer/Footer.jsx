import './style/footer.css'
import { useLocation, useNavigate } from 'react-router-dom';

const QUICK_LINKS = [
	{ id: 'Start', key: 'home' },
	{ id: 'About', key: 'about' },
	{ id: 'Skills', key: 'skills' },
	{ id: 'Education', key: 'education' },
	{ id: 'Experience', key: 'experience' },
	{ id: 'Projects', key: 'projects' },
	{ id: 'Contact', key: 'contact' },
];

const SOCIALS = [
	{ label: 'LinkedIn', icon: 'bxl-linkedin-square', url: 'https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/' },
	{ label: 'GitHub', icon: 'bxl-github', url: 'https://github.com/AndresDev-20' },
	{ label: 'Instagram', icon: 'bxl-instagram', url: 'https://www.instagram.com/marroquinbernalyeisonandres?igsh=MTY0eGRudTlpbW16Zg==' },
	{ label: 'Facebook', icon: 'bxl-facebook-square', url: 'https://www.facebook.com/profile.php?id=61551874028183&mibextid=ZbWKwL' },
];

const Footer = ({t}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const handelWhass = (e) => {
		e.preventDefault()
		e.stopPropagation()
		const message = encodeURIComponent(`Hola Yeison, quisiera hablar contigo sobre un empleo de desarrollador.`);
		window.open(`https://wa.me/573227222010?text=${message}`, "_blank", "noopener");
	  }

	// Funciona desde cualquier ruta: si no estamos en el inicio, primero volvemos
	const goToSection = (e, id) => {
		e.preventDefault();
		if (location.pathname !== '/') {
			navigate('/', { state: { scrollTo: id } });
			return;
		}
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div>
			<div className='Footer_one'>
				<div className='Footer_div1'>
					<h1>{t("footer.name")}</h1>
					<p>{t("footer.message")}</p>
					<br />
					<p className='Footer_quote'>{t("footer.quote")}</p>
				</div>
				<div className='Footer_div2'>
					<h1>{t("footer.quick_links")}</h1>
					<ul>
						{QUICK_LINKS.map((link) => (
							<a href={`#${link.id}`} key={link.id} onClick={(e) => goToSection(e, link.id)}>
								<li><i className='bx bx-chevron-right'></i> {t(`Header.${link.key}`)}</li>
							</a>
						))}
					</ul>
				</div>
				<div className='Footer_div3'>
					<h1>{t("footer.contact_info")}</h1>
					<ul className='Footer_div3_ul'>
						<li><a href="tel:+573227222010"><span><i className='bx bxs-phone'></i></span> +57 3227222010</a></li>
						<li><a href="mailto:andresmarroquin887@gmail.com"><span><i className='bx bxs-envelope'></i></span> andresmarroquin887@gmail.com</a></li>
						<li><span><i className='bx bxs-map'></i></span> Ibague-Tolima, Colombia</li>
					</ul>
					<ul className='Footer_div3_ul1'>
						{SOCIALS.slice(0, 2).map((social) => (
							<a href={social.url} target="_blank" rel="noopener noreferrer" className='lik' key={social.label} aria-label={social.label} title={social.label}>
								<li><i className={`bx ${social.icon}`}></i></li>
							</a>
						))}
						<a href="https://wa.me/573227222010" onClick={handelWhass} className='lik' aria-label="WhatsApp" title="WhatsApp">
							<li><i className='bx bxl-whatsapp-square'></i></li>
						</a>
						{SOCIALS.slice(2).map((social) => (
							<a href={social.url} target="_blank" rel="noopener noreferrer" className='lik' key={social.label} aria-label={social.label} title={social.label}>
								<li><i className={`bx ${social.icon}`}></i></li>
							</a>
						))}
						<a href="#Contact" onClick={(e) => goToSection(e, 'Contact')} className='lik' aria-label={t("Header.contact")} title={t("Header.contact")}>
							<li><i className='bx bx-envelope'></i></li>
						</a>
					</ul>
				</div>
			</div>
			<hr />
			<div className='Footer_two'>
				<h1>Copyright © {new Date().getFullYear()} <span className='Footer_fin'>Yeison Marroquin.</span>❤️</h1>
			</div>
		</div>
	)
}

export default Footer
