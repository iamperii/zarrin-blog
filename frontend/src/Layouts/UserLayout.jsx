import { Outlet } from 'react-router-dom';
import style from './userLayout.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Subscribe from '../components/Subscribe/Subscribe';

const UserLayout = () => {
	return (
		<>
			<div className={style.layout}>
				<Header />
				<div className={style.outletContainer}>
					<Outlet />
				</div>
				<Subscribe />
				<Footer />
			</div>
		</>
	);
};

export default UserLayout;
