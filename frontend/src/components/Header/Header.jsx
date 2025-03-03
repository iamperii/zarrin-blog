import style from './header.module.scss';
import ZarrinLogo from '../../assets/svg/zarrin-logo.svg';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router';

const Header = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.logo}>
					<img src={ZarrinLogo} alt="zarrin-logo" />
					<Link to={'/'} className={style.title}>
						<h1 className={style.title}>Zarrin</h1>
					</Link>
				</div>
				<nav className={style['nav-items']}>
					<Link to="/blogs" className={style['nav-item']}>
						Blog
					</Link>
					<Link to="/about" className={style['nav-item']}>
						About
					</Link>
					<div className={style['nav-item']}>
						<CiSearch size={30} />
					</div>
					<Link to="/contact" className={style['nav-item']}>
						Contact Us
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
