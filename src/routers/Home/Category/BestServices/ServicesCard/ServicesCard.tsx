import React from 'react';
import "./ServicesCard.scss"
import { IServicesCard } from '../../../../../helpers/services_cards';

const ServicesCard = (props : {card : IServicesCard}) => {
	return (
		<div className='service-card'>
			<div className="service-card_container">
				<img className="service-card_image" src={props.card.src}/>
				<div className="service-card_name">{props.card.name}</div>
				<div className="service-card_description">{props.card.description}</div>
			</div>
		</div>
	);
};

export default ServicesCard;