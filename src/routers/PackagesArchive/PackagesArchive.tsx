import React from 'react';
import "./PackagesArchive.scss"
import ThemeImage from '../../components/ThemeImage/ThemeImage';
import ThemeTitle from '../../components/ThemeImage/ThemeTitle/ThemeTitle';

const PackagesArchive = () => {
	const back_1 = "images/PackagesArchive/PackagesArchive_1.png"
	return (
		<div className='packages-archive'>
			<div className="archive-container">
				<ThemeImage source={back_1}>
					<ThemeTitle before="SEARCH TOUR" after="Travel With Us"/>
				</ThemeImage>
				<div className="package-search">
					<div className="search-container">
						<div className="search-filters_1"></div>
						<div className="search-content">
							<div className="content-packages"></div>
							<div className="content-filters_2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PackagesArchive;