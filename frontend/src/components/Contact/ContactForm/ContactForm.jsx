import style from './contactForm.module.scss';

const ContactForm = () => {
	const handleMessageBtn = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<div className={style.contactForm}>
				<form action="" className={style.formBox}>
					<div className={style.formGrid}>
						<div className={style.formRow}>
							<label htmlFor="name">Name</label>
							<input type="text" name="name" />
						</div>

						<div className={style.formRow}>
							<label htmlFor="email">Email</label>
							<input type="email" name="email" />
						</div>
					</div>

					<div className={style.formGrid}>
						<div className={style.formRow}>
							<label htmlFor="phone">Phone</label>
							<input type="tel" name="phone" />
						</div>
						<div className={style.formRow}>
							<label htmlFor="subject">Subject</label>
							<input type="text" name="subject" />
						</div>
					</div>

					<div className={style.formRow}>
						<label htmlFor="message">Message</label>
						<textarea name="message" rows={10}></textarea>
					</div>
					<button
						type="submit"
						className={style['send-msg-btn']}
						onClick={handleMessageBtn}
					>
						Send message
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
