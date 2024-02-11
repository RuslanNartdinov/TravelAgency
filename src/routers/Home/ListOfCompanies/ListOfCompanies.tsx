import React from 'react';
import "./ListOfCompanies.scss"
import Company from './Company/Company';
import { companies } from '../../../helpers/companies';

const ListOfCompanies = () => {
	const list_of_companies = companies;
	return (
		<div className='list-of-companies'>
			{list_of_companies.map((company)=>{
				return(
					<Company key={company.name} source={company}/>
			)})}
		</div>
	);
};

export default ListOfCompanies;