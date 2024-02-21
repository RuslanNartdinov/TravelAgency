import React from 'react';
import "./Home.scss"
import ThemeImage from '../../components/ThemeImage/ThemeImage';
import ListOfCompanies from './ListOfCompanies/ListOfCompanies';
import Search from './Search/Search';
import Category from './Category/Category';
import PackageTheme from '../../components/PackageTheme/PackageTheme';
import ViewPackagesButton from '../../components/ViewPackagesButton/ViewPackagesButton';
import ExploreCard from '../../components/ExploreCard/ExploreCard';
import Trending from './Trending/Trending';

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
				<Category/>
				<PackageTheme reverse={false} src="/images/HomePage/HoneymoonIllustration.png" beforeTitle="HONEYMOON SPECIALS" title="Our Romantic Tropical Destinations" description="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!">
					<ViewPackagesButton src="/honeymoon" name="View Packages"/>
				</PackageTheme>
				<div className="exploration-container">
					<ExploreCard titleBefore='Promotion' title="Explore Nature" src="/images/Photos/Mountains.png" link=""/>
					<ExploreCard titleBefore='Promotion' title='Explore Cities' src="/images/Photos/TokyoStreet.png" link=""/>
				</div>
				<PackageTheme reverse={true} src="/images/HomePage/TowerFranceIllustration.png" beforeTitle="HONEYMOON SPECIALS" title="We Provide You Best Europe Sightseeing Tours" description="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!">
					<ViewPackagesButton src="/honeymoon" name="View Packages"/>
				</PackageTheme>
				<Trending titleBefore='TRENDS' title='Our Clients Say about us'/>
			</div>
		</div>
	);
};

export default Home;