import { PlanetsInformationProps } from '../../types/PlanetsType';

export const PlanetInformation = ({ information }: PlanetsInformationProps) => {
	return (
		<div className='card-planet'>
			<div className='card-planet-img'>
				<img src={information.image} alt={information.name} className={`card-planet-${information.name}`} />
			</div>
			<h3>{information.name}</h3>
		</div>
	);
};
