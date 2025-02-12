import React from 'react';
import FeaturePost from '../components/Posts/FeauturePost/FeaturePost';
import RecentPost from '../components/Posts/RecentPost/RecentPost';
import PopularPost from '../components/Posts/PopularPost/PopularPost';

const Home = () => {
	return (
		<>
			<FeaturePost />
			<RecentPost />
			<PopularPost />
		</>
	);
};

export default Home;
