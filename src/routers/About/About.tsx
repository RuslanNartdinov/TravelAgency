import React from 'react';
import "./About.scss"
import ThemeImage from '../../components/ThemeImage/ThemeImage';
import ThemeTitle from '../../components/ThemeImage/ThemeTitle/ThemeTitle';
import PackageTheme from '../../components/PackageTheme/PackageTheme';
import ViewPackagesButton from '../../components/ViewPackagesButton/ViewPackagesButton';

const About = () => {
	const ThemeImageSource : string = "/images/About/About_background.png"
	return (
		<div className='about'>
				<div className="about-container">
					<ThemeImage source={ThemeImageSource}>
						<ThemeTitle before="READ" after="About Us"/>
					</ThemeImage>
					<PackageTheme src='/images/About/about_us_2.png' beforeTitle='Promotion' title='We Provide You Best Europe Sightseeing Tours' description='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!' reverse={false}>
					<ViewPackagesButton src='' name='View Packages'/>
					</PackageTheme>
				</div>
		</div>
	);
};

export default About;