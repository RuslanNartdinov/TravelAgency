import React from 'react';
import "./Header.scss";
import Services from './Services/Services';
import { Link } from 'react-router-dom';

const Header = () => {
	const toggleServices = () => {
		const services : any = document.querySelector(".services");
		if(services.classList.contains("visible"))
		{
			services.classList.add("display-none");
			services.classList.remove("visible");
		}	
		else
		{
			services.classList.add("visible");
			services.classList.remove("display-none");
		}
	}
	return (
		<div className='header'>
			<div className="header-container">
				<button className="logotype">Travel</button>
				<div className="navigation-panel">

					<button className="navigation-panel_button">
						<Link to={"/"}>Home</Link>
					</button>
					<button className="navigation-panel_button">
						<Link to={"/about"}>About</Link>
					</button>
					<button onClick={()=>{toggleServices()}}
							className="navigation-panel_button-services"
							>
							<div>Services</div>
							<Services/>
					</button>
					<button className="navigation-panel_button">
						<Link to={"/upcoming-packages"}>Upcomming Packages</Link>
					</button>

				</div>
				<button className="get-in-touch">Get in Touch</button>
			</div>
		</div>
	);
};

export default Header;