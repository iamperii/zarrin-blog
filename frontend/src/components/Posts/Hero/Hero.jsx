import style from './hero.module.scss';
import { useEffect } from 'react';
import { fetchAllPosts } from '../../../store/actions/postAction';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Hero = () => {
	const dispatch = useDispatch();
	const { posts, loading, error } = useSelector((state) => state.posts);
	const post = posts.find((post) => post.id == 6);

	useEffect(() => {
		dispatch(fetchAllPosts());
	}, [dispatch]);

	if (!post) {
		return <div>Post not found</div>;
	}
	return (
		<>
			<div className={style.hero}>
				<section className={style['left-section']}>
					<p>Feature Post</p>
					<h1 className={style['feature-title']}>{post.title}</h1>
					<p className={style['feature-desc']}>{post.short_desc}</p>
					<Link to="/blogs">
						<button>Read more</button>
					</Link>
				</section>
				<section className={style['right-section']}>
					<img src={post.img_2} alt="Our first post image." />
				</section>
			</div>
		</>
	);
};

export default Hero;
