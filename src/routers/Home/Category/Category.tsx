import React from 'react';
import "./Category.scss"
import BestServices from './BestServices/BestServices';

const Category = () => {
	return (
		<div className='category'>
			<div className="category-container">
				<BestServices/>
			</div>
		</div>
	);
};

export default Category;