import style from './header.module.scss';
import ZarrinLogo from '../../assets/svg/zarrin-logo.svg';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router';

const Header = () => {
	return (
		<>
			<div className={style.header}>
				<div className={style.logo}>
					<img src={ZarrinLogo} alt="zarrin-logo" />
					<h1 className={style.title}>Zarrin</h1>
				</div>
				<div className={style['nav-items']}>
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
				</div>
			</div>
		</>
	);
};

export default Header;
