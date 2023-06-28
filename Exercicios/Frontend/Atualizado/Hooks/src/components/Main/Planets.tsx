import { useContext } from 'react';
import { PlanetsContext } from '../../context/PlanetsContext';
import { PlanetInformation } from './PlanetInformations';

export const Planets = () => {
	const planets = useContext(PlanetsContext);
	return (
		<section className='planets'>
      {/* Verifica se planets é null(valor default) */}
			{planets ? (
				<ul>
					{planets.map((planet) => (
						<li key={planet.name}>
							<PlanetInformation information={planet} />
						</li>
					))}
				</ul>
				) : <p>Carregando ...</p>}
		</section>
	);
};
