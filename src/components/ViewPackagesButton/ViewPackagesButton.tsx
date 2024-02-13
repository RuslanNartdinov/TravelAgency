import React from 'react';
import "./ViewPackagesButton.scss"
import { Link } from 'react-router-dom'

const ViewPackagesButton = (props : {src : string, name :string}) => {
	return (
			<Link className='view-packages' to={props.src}>
				{props.name}
			</Link>
	);
};

export default ViewPackagesButton;