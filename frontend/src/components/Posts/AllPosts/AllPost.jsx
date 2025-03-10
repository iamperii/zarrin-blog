import style from './allPosts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllPosts } from '../../../store/actions/postAction';
import PostCard from '../PostCard/PostCard';

const AllPost = () => {
	const { posts, loading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllPosts());
	}, [dispatch]);

	return (
		<>
			<div className={style.allPost}>
				{loading && <p className={style.loading}>Loading...</p>}
				<div className={style.cards}>
					{posts?.map((post) => {
						return <PostCard key={post.id} post={post} />;
					})}
				</div>
			</div>
		</>
	);
};

export default AllPost;
