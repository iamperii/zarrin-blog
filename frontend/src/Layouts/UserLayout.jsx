import { Outlet } from 'react-router-dom';
import style from './userLayout.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const UserLayout = () => {
	return (
		<>
			<div className={style.layout}>
				<Header />
				<div className={style.outletContainer}>
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default UserLayout;
