import { useContext, useMemo, useState } from 'react';
import { MissionsCard } from './MissionsCard';
import { MissionsContext } from '../../context/MissionsContext';
import { MissionsType } from '../../types/MissionType';

export const Missions = () => {
	const missions = useContext(MissionsContext);
	const [filteredMissions, setFiteredMissions] = useState<MissionsType[]>([]);
	const [filterName, setFilterName] = useState<string>('');

	const handlerFilterName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e;

		// No mínimo 3 letras para realizar o filtro
		if (target.value.length >= 3) {
			const targetNameLower = target.value.toLowerCase();
			const filtered = missions.filter(({ name }) => name.toLocaleLowerCase().includes(targetNameLower));
			filtered.length > 0 && setFiteredMissions(filtered); // Verifica se o filtro retornou algum resultado
		}
		if (target.value.length === 0 && filteredMissions.length !== 0) {
			// só vai ocorrer uma nova renderização nos componentes, caso o filteredMissions tenha recebido um filtro maior que zero
			setFiteredMissions([]);
		}
		setFilterName(target.value);
	};

	const verifyCardsFiltered = filteredMissions.length > 0 ? filteredMissions : missions;

	return (
		<section className='cards'>
			<h2 className='cards-title'>Missões</h2>
			<section className='cards-filter'>
				<label htmlFor='filter-name'>Nome:</label>
				<input type='text' value={filterName} onChange={(e) => handlerFilterName(e)} id='filter-name' />
			</section>
			<ul>
				{useMemo(
					() =>
						verifyCardsFiltered?.map((mission) => (
							<li key={mission.name}>
								<MissionsCard information={mission} />
							</li>
						)),
					[filteredMissions],
				)}
			</ul>
		</section>
	);
};
