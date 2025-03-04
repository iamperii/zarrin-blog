import style from './subscribe.module.scss';

const Subscribe = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<div className={style.subscribe}>
				<h1 className={style['subscribe-title']}>
					Get our stories delivered From us to your inbox weekly.
				</h1>
				<form action="subscribe" className={style['subscribe-form']}>
					<input type="email" placeholder="Your email" />
					<button type="submit" onClick={handleSubmit}>
						Get started
					</button>
				</form>
				<p className={style['subscribe-info']}>
					Get a response tomorrow if you submit by 9pm today. If we received
					after 9pm will get a reponse the following day.
				</p>
			</div>
		</>
	);
};

export default Subscribe;
