import style from './footer.module.scss';
import ZarrinLogo from '../../assets/svg/zarrin-logo.svg';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<footer className={style.footer}>
				<div className={style['first-section']}>
					<div className={style.logo}>
						<img src={ZarrinLogo} alt="zarrin-logo" />
						<h1 className={style.title}>Zarrin</h1>
					</div>
					<nav className={style['nav-items']}>
						<Link to="/" className={style['nav-item']}>
							Home
						</Link>
						<Link to="/blogs" className={style['nav-item']}>
							Blog
						</Link>
						<Link to="/about" className={style['nav-item']}>
							About
						</Link>
						<Link to="/contact" className={style['nav-item']}>
							Contact Us
						</Link>
					</nav>
					<nav className={style['social-icons']}>
						<FaFacebook className={style['social-icon']} />
						<FaLinkedin className={style['social-icon']} />
						<FaYoutube className={style['social-icon']} />
						<FaInstagram className={style['social-icon']} />
					</nav>
				</div>

				<div className={style.copyright}>
					<p className={style['copyright-info']}>
						Copyright Ideapeel Inc © 2023. All Right Reserved
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
