import { Link } from 'react-router-dom';
import style from './postCard.module.scss';
import { formatDate } from '../../../utils/dateFormatter';

const PostCard = ({ post }) => {
	return (
		<div className={style.card}>
			<div className={style['card-img']}>
				<img src={post.img_1} alt="" />
			</div>
			<div className={style['card-section-first']}>
				<div className={style['card-content']}>{post.content}</div>
				<div className={style['card-date']}>{formatDate(post.date)}</div>
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
};

export default PostCard;
