import React from 'react';
import "./ThemeTitle.scss"

const ThemeTitle = (props : {before : string, after : string}) => {
	return (
		<div className='theme-title'>
			<div className="title-before">
				{props.before}
			</div>
			<div className="title-after">
				{props.after}
			</div>
		</div>
	);
};

export default ThemeTitle;