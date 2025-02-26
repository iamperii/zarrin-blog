import style from './workCard.module.scss';
import { Link } from 'react-router';

const WorkCard = ({ about }) => {
	console.log(about);
	return (
		<>
			{/* <div className={style['work-cards']}> */}
				<div className={style['work-card']}>
					<h1 className={style['card-id']}>0{about.id}</h1>
					<h2 className={style['card-title']}>{about.title}</h2>
					<p className={style['card-desc']}>{about.description}</p>
					<Link to="/contact" className={style['learn-more']}>
						Learn More
					</Link>
				</div>
			{/* </div> */}
		</>
	);
};

export default WorkCard;
