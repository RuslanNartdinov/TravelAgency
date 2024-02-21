import React, { ReactElement } from 'react';
import './PackageTheme.scss';

const PackageTheme = (props : {src : string, beforeTitle : string, title : string, description : string, children : ReactElement, reverse : boolean}) => {
	return (
		<div className='package-theme'>
			<div className="package-container"
				 style={{
					flexDirection: `${props.reverse ? 'row-reverse' : 'row'}`,
				 }}>
				<div className="package-image"><img src={props.src} alt={props.title} /></div>
				<div className="package-content">
					<div className="package-title">
						<div className="package-before-title">{props.beforeTitle}</div>
						<div className="package-main-title">{props.title}</div>
					</div>
					<div className="package-description">{props.description}</div>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default PackageTheme;