import React, { ReactNode } from 'react';
import "./ThemeImage.scss"

const ThemeImage = (
	props : {source : string, children : ReactNode}
	) => {
	return (
		<div className='image-container'>
			<div className='image' 
			style={{
				backgroundImage: `url(${props.source})`,
				backgroundSize: 'cover',
				backgroundPosition: 'centre',
			}}
			>
				<div className="image-cover">
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default ThemeImage;