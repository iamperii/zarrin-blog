import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../../store/actions/postAction';
import style from './blogDetails.module.scss';
import { formatDate } from '../../utils/dateFormatter';

const BlogDetails = ({ id }) => {
	const dispatch = useDispatch();
	const { posts, loading, error } = useSelector((state) => state.posts);
	const post = posts.find((post) => post.id == id);

	useEffect(() => {
		dispatch(fetchAllPosts());
	}, [dispatch]);

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			<div className={style.blogDetails}>
				{post && (
					<main className={style.post}>
						<div className={style['card-intro']}>
							<div className={style['card-section-first']}>
								<p className={style['card-content']}>{post.content}</p>
								<p className={style['card-date']}>{formatDate(post.date)}</p>
							</div>
							<h1 className={style.postTitle}>
								How to make a Game look more attractive with New VR & AI
								Technology
							</h1>
						</div>

						<p className={style.text}>{post.paragraph1}</p>
						<section className={style.quoteContainer}>
							<q className={style.quote}>{post.quoute}</q>
							<p className={style.quoteAuthor}>-{post.quote_author}</p>
						</section>
						<p className={style.text}>{post.paragraph2}</p>
						<p className={style.text}>{post.paragraph3}</p>

						<img src={post.img_2} alt="image-2" className={style.img2} />

						<p className={style.text}>{post.short_desc}</p>
					</main>
				)}
			</div>
		</>
	);
};

export default BlogDetails;
