import React from 'react';
import "./Company.scss"
import { ICompany } from '../../../../helpers/companies';

const Company = (props : {source : ICompany}) => {
	return (
		<div className='company'>
			<div 
			className="company-container"
			>
			<img className='company-image'
				 src={props.source.src}
				 alt=""
				 style={{
					backgroundSize: 'cover',
					backgroundPosition: 'centre',
				 }} 
				  />
			</div>
		</div>
	);
};

export default Company;