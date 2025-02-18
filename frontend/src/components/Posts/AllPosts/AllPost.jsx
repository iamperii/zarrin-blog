import style from './allPosts.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllPosts } from '../../../store/actions/postAction';
import { formatDate } from '../../../utils/dateFormatter';

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
						return (
							<div className={style.card} key={post.id}>
								<div className={style['card-img']}>
									<img src={post.img_1} alt="" />
								</div>
								<div className={style['card-section-first']}>
									<div className={style['card-content']}>{post.content}</div>
									<div className={style['card-date']}>
										{formatDate(post.date)}
									</div>
								</div>
								<div className={style['card-title']}>
									<h1>{post.title}</h1>
								</div>
								<div className={style['card-desc']}>
									<p>{post.short_desc}</p>
								</div>
								<Link to={`/blog/${post.id}`}>Read more...</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default AllPost;
