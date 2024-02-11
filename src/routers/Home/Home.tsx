import React from 'react';
import "./Home.scss"
import ThemeImage from '../../components/ThemeImage/ThemeImage';
import ListOfCompanies from './ListOfCompanies/ListOfCompanies';
import Search from './Search/Search';
import BestServices from './Category/BestServices/BestServices';
const Home = () => {
	const ThemeImageSource : string = "/images/HomePage/Home_Page.jpeg"
	return (
		<div className='home'>
			<div className="home-container">
				<ThemeImage 
				source={ThemeImageSource}
				>
				<Search/>
				</ThemeImage>
				<ListOfCompanies/>
				<BestServices/>
			</div>
		</div>
	);
};

export default Home;