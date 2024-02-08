import React from 'react';
import "./Home.scss"
import ThemeImage from '../../components/ThemeImage/ThemeImage';

const Home = () => {
	return (
		<div className='home'>
			<div className="home-container">
				<ThemeImage source="/public/images/Home_Page.jpeg"/>
			</div>
		</div>
	);
};

export default Home;