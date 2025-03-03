import React from 'react';
import RecentPost from '../components/Posts/RecentPost/RecentPost';
import PopularPost from '../components/Posts/PopularPost/PopularPost';
import Hero from '../components/Posts/Hero/Hero';
import Work from '../components/About/Work/Work';

const Home = () => {
	return (
		<>
			<Hero />
			<RecentPost />
			<Work />
			<PopularPost />
		</>
	);
};

export default Home;
