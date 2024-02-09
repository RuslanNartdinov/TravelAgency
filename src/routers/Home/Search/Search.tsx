import React from 'react';
import "./Search.scss"

const Search = () => {
	return (
		<div className="search">
			<div className="search__text">No matter where are you going to, we'll take you there</div>
			<div className="search__input">
			<form action="">
				<input className='input__where' placeholder='Where to?' type="text" />
				<select className='input__type' name="" id="">
					<option value="">Travel Type</option>
					<option value=""></option>
				</select>
				<select className='input__duration' name="" id="">
					<option value="">Duration</option>
					<option value=""></option>
				</select>
				<button className='input__submit'>Submit</button>
			</form>

			</div>
			<div className="search__community"></div>
		</div>
	);
};

export default Search;