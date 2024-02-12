import React from 'react';
import "./BestServices.scss"
import ServicesCard from './ServicesCard/ServicesCard';
import { servicesCards } from '../../../../helpers/services_cards';

const BestServices = () => {
	const services_cards = servicesCards;
	return (
		<div className='best-services'>
			<div className="best-services_container">
				<div className="best-services_title">We offer Best services</div>
				<div className="best-services__cards">
					<div className="b-s__cards-container">
						{services_cards.map((card)=>{
							return (<ServicesCard card={card}/>)
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestServices;