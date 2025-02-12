import style from './blogPageTitle.module.scss';

const BlogPageTitle = () => {
	return (
		<>
			<div className={style['blog-page-title']}>
				<div className={style.content}>
					<h5>OUR BLOGS</h5>
					<h1>Find our all blogs from here</h1>
					<p>
						our blogs are written from very research research and well known
						writers writers so that we can provide you the best blogs and
						articles articles for you to read them all along
					</p>
				</div>
			</div>
		</>
	);
};

export default BlogPageTitle;
