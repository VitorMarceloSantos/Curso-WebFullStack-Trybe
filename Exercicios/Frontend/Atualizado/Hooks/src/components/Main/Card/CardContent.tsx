import { CardContentProps } from '../../../types/CardType';

export const CardContent = ({ information }: CardContentProps) => {
	return (
		<>
			<h3>{information.name}</h3>
			<div className='card-mission-informations'>
				<p>{information.year}</p>
				<p>{information.country}</p>
				<p>{information.destination}</p>
			</div>
		</>
	);
};
