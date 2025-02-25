import { useParams } from 'react-router-dom';
import BlogDetails from '../components/BlogDetails/BlogDeatils';
import PopularPost from '../components/Posts/PopularPost/PopularPost';

const SingleBlog = () => {
	const { id } = useParams();

	return (
		<>
			<BlogDetails id={id} />
			<PopularPost />
		</>
	);
};

export default SingleBlog;
