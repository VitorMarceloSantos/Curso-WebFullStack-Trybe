import { ReturnPlanetsType } from '../../types/PlanetsType';

export const PlanetInformation = ({ information }: ReturnPlanetsType) => {
	return (
		<div className='card-planet'>
			<img src={information.image} alt={information.name} />
			<h3>{information.name}</h3>
		</div>
	);
};
