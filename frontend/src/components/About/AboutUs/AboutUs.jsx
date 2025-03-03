import style from './aboutUs.module.scss';
import CompanyIMG from '../../../assets/svg/companyIMG.svg';
import Work from '../Work/Work';

const AboutUs = () => {
	return (
		<>
			<div className={style.about}>
				<section className={style['about-section']}>
					<p className={style.regular}>ABOUT US</p>
					<h1>Creative Blog Writting and publishing site</h1>
					<p className={style.regular}>
						Leverage agile frameworks to provide a robust synopsis for high
						level overviews. Iterative approaches to corporate strategy foster
						collaborative thinking to further the overall value proposition.
						Organically grow the holistic world view of disruptive innovation
						via workplace diversity and empowerment.
					</p>
				</section>
				<img
					src={CompanyIMG}
					alt="employeers-image"
					className={style.companyImg}
				/>
			</div>
			<Work />
		</>
	);
};

export default AboutUs;
