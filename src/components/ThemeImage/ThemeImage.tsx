import React from 'react';

const ThemeImage = (props : {source : string}) => {
	return (
		<div>
			<img src={props.source} alt="Home Page Alt" />
		</div>
	);
};

export default ThemeImage;