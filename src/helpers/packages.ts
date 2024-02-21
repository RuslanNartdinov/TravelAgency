export interface IPackage {
	id : number,
	imageSrc : string,
	flagSrc : string,
	date : string,
	subscribers: number,
	name : string,
	raiting : number,
	price : number,
	description : string,
	src : string,
}

export const packages : IPackage[] = [
	{
		id : 0,
		imageSrc : '/images/Countries/Brazil.png',
		flagSrc : '',
		date : '',
		subscribers: 25,
		name : 'Switzerland',
		raiting : 5,
		price : 1000,
		description : "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
		src : "",
	},
	{
		id : 1,
		imageSrc : '/images/Countries/Switzerland.png',
		flagSrc : '',
		date : '',
		subscribers: 35,
		name : 'Switzerland',
		raiting : 5,
		price : 1200,
		description : "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
		src : "",
	},
	{
		id : 2,
		imageSrc : '/images/Countries/Egypt.png',
		flagSrc : '',
		date : '',
		subscribers: 45,
		name : 'Switzerland',
		raiting : 5,
		price : 1430,
		description : "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
		src : "",
	},
]