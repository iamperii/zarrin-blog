import style from './postHead.module.scss';
import { Link } from 'react-router-dom';

const PostHead = ({ status }) => {
	return (
		<section className={style.postHead}>
			<h1>{status} Post</h1>
			<Link to="/blogs">
				<button className={style.viewBtn}> View All</button>
			</Link>
		</section>
	);
};

export default PostHead;
