import React from 'react';
import "./Services.scss"

const Services = () => {
	const removeServices = (currentTarget : Element) => {
		currentTarget.classList.remove("visible");
		setTimeout(()=>{
			currentTarget.classList.add("display-none");
		},500)
	}
	return (
		<div onMouseLeave={(event)=>{removeServices(event.currentTarget)}} className='services display-none'>
			<div className="services_button">Honeymoon Packages</div>
			<div className="services_button">Tours Packages</div>
			<div className="services_button">Musical Events</div>
			<div className="services_button">Build Package</div>
		</div>
	);
};

export default Services;