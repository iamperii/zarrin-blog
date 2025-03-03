import { useEffect } from 'react';
import style from './work.module.scss';
import WorkCard from './WorkCard/WorkCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbout } from '../../../store/actions/aboutAction';

const Work = () => {
	const dispatch = useDispatch();
	const { about, loading, error } = useSelector((state) => state.about);
	useEffect(() => {
		dispatch(fetchAbout());
	}, [dispatch]);
	return (
		<>
			<div className={style.work}>
				<section className={style.head}>
					<p className={style['work-regular-bold']}>HOW WE WORK</p>
					<div className={style['team-work']}>
						<h1 className={style['work-title']}>
							I will show you how our team works
						</h1>
						<p className={style['work-regular']}>
							Bring to the table win-win market strategies to ensure perfect
							articles.
						</p>
					</div>
				</section>
				<div className={style['work-cards']}>
					{about?.map((item) => {
						return <WorkCard key={item.id} about={item} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Work;
