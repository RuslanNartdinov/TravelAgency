import React from 'react';
import "./Trending.scss"
import PackageCard from '../../../components/PackageCard/PackageCard';
import { packages, IPackage } from '../../../helpers/packages';

const Trending = (props : {titleBefore : string, title : string}) => {
	return (
		<div className='trending'>
			<div className="trending-container">
				<div className="trending-title">
					<div className="title-before">{props.titleBefore}</div>
					<div className="title-main">{props.title}</div>
				</div>
				<div className="trending-packages">
					{packages.map((packageItem : IPackage)=>{
						return (
							<PackageCard packageItem={packageItem}/>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Trending;