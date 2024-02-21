import React from 'react';
import "./PackageCard.scss"
import { IPackage } from '../../helpers/packages';

import ExplorePackageButton from './ExplorePackageButton/ExplorePackageButton';

const PackageCard = (props : {packageItem : IPackage}) => {
	const renderStars = (starNumber: number) => {
        const stars: JSX.Element[] = [];

        for (let i: number = 0; i < starNumber; i++) {
            stars.push(<img src="/images/Icons/star.png" alt='*'/>);
        }

        return stars;
    };
	return (
		<div className='package-card'>
			<div className="package-card_container">
				<div className="package-card_image">
					<img src={props.packageItem.imageSrc} alt={props.packageItem.name} />
				</div>
				<div className="package-content">
					<div className="package-content__status">
						<div className="status__calendar"></div>
						<div className="status__country">
							<div className="country-name">{props.packageItem.name}</div>
							<div className="country-raiting">{renderStars(props.packageItem.raiting)}</div>
						</div>
						<div className="status-price">{props.packageItem.price} $</div>
					</div>
					<div className="package-content-description">{props.packageItem.description}</div>
				</div>
				<ExplorePackageButton/>
			</div>
		</div>
	);
};

export default PackageCard;