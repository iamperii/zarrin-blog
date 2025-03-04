import ContactCard from '../ContactCard/ContactCard';
import style from './contactHero.module.scss';

const ContactHero = () => {
	return (
		<>
			<div className={style['contact-hero']}>
				<div className={style['contact-head']}>
					<h1 className={style['contact-title']}>Get in Touch</h1>
					<p className={style.regular}>
						Contact us to publish your content and show ads to our website and
						get a good reach.
					</p>
				</div>
				<ContactCard />
			</div>
		</>
	);
};

export default ContactHero;
