import React from 'react';
import './ExploreCard.scss';
import { Link } from 'react-router-dom';

const ExploreCard = (props : {src : String, link: string, titleBefore : string, title: string}) => {
	return (
		<div className='explore-card'>
			<div	className="explore-card-image"
					style={{
						backgroundImage: `url(${props.src})`,
						backgroundSize: 'cover',
						backgroundPosition: 'centre',
					}}
				>
				<div className="explore-card-cover">
					<div className="explore-card-title">
						<div className="explore-card-title-before">{props.titleBefore}</div>
						<div className="explore-card-title-main">{props.title}</div>
					</div>
					<Link to={props.link} className="explore-card-button">
						ViewPackages
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ExploreCard;