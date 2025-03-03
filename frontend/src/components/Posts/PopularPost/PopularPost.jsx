import style from './popularPost.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllPosts } from '../../../store/actions/postAction';
import PostCard from '../PostCard/PostCard';

const PopularPost = () => {
	const { posts, loading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllPosts());
	}, [dispatch]);
	return (
		<>
			<div className={style.popularPost}>
				<section className={style.postHead}>
					<h1>Popular Post</h1>
					<Link to="/blogs">
						<button className={style.viewBtn}> View All</button>
					</Link>
				</section>
				<div className={style.cards}>
					{posts.slice(2, 5).map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</div>
			</div>
		</>
	);
};

export default PopularPost;
