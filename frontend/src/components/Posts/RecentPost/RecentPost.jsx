import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../PostCard/PostCard';
import PostHead from '../PostHead/PostHead';
import style from './recentPost.module.scss';
import { useEffect } from 'react';
import { fetchAllPosts } from '../../../store/actions/postAction';

const RecentPost = () => {
	const { posts, loading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllPosts());
	}, [dispatch]);

	return (
		<>
			<div className={style.recentPost}>
				<PostHead status={'Our Recent'} />
				<div className={style.cards}>
					{posts.slice(0, 3).map((post, index) => (
						<PostCard
							key={post.id}
							post={post}
							className={index === 0 ? `${style.largerCard}` : `${style.card}`}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default RecentPost;
