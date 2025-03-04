import { RiHomeOfficeLine } from 'react-icons/ri';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import Tilt from 'react-parallax-tilt';
import style from './contactCard.module.scss';

const ContactCard = () => {
	return (
		<>
			<div className={style['contact-cards']}>
				<Tilt>
					<div className={style['contact-card']}>
						<div className={style['contact-card-logo']}>
							<RiHomeOfficeLine className={style.icon} />
							<p className={style['contact-card-name']}>Office</p>
						</div>
						<div className={style['contact-card-desc']}>
							Victoria Street, London, UK
						</div>
					</div>
				</Tilt>
				<Tilt>
					<div className={style['contact-card']}>
						<div className={style['contact-card-logo']}>
							<MdOutlineMailOutline className={style.icon} />
							<p className={style['contact-card-name']}>Email</p>
						</div>
						<div className={style['contact-card-desc']}>hello@zarrin.com</div>
					</div>
				</Tilt>
				<Tilt>
					<div className={style['contact-card']}>
						<div className={style['contact-card-logo']}>
							<LuPhone className={style.icon} />
							<p className={style['contact-card-name']}>Phone</p>
						</div>
						<div className={style['contact-card-desc']}>(001) 2342 3451</div>
					</div>
				</Tilt>
			</div>
		</>
	);
};

export default ContactCard;
