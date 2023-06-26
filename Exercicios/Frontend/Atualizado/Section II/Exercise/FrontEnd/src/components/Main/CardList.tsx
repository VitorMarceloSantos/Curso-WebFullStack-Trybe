import { Card } from './Card.js';

const informations = [
	{
		city: 'Rio de Janeiro',
		country: 'Brasil',
		imageUrl: '/src/assets/rio.jpg',
		visited: true,
	},
	{
		city: 'Cidade do Cabo',
		country: 'África do Sul',
		imageUrl: '/src/assets/cidade-do-cabo.jpg',
		visited: true,
	},
	{
		city: 'Acapulco',
		country: 'México',
		imageUrl: '/src/assets/acapulco.jpeg',
	},
];

export const CardList = () => {
	return (
		<>
			{informations.map((cityInfo, index) => (
				<div key={cityInfo.city} data-testid={`div-${index}`}>
					<Card cardInfo={{ info: cityInfo, index }} />
				</div>
			))}
		</>
	);
};
