import { useContext, useMemo, useRef, useState } from 'react';
import { MissionsCard } from './MissionsCard';
import { MissionsContext } from '../../context/MissionsContext';
import { MissionsType } from '../../types/MissionType';
import { AddNewMission } from './AddNewMission';
import { MissionsActionType } from '../../types/MissionsEnum';
import { valuesInitialForm } from '../../utils/InitialValues';

export const Missions = () => {
	const { state, dispatch } = useContext(MissionsContext);
	const [filteredMissions, setFiteredMissions] = useState<MissionsType[]>([]);
	const [filterSelected, setFilterSelected] = useState<keyof MissionsType>('name');
	const [filterGeneric, setFilterGeneric] = useState<string>('');
	const [formDisplay, setFormDisplay] = useState<boolean>(false);
	const [actionSelected, setActionSelected] = useState<MissionsActionType>(MissionsActionType.NEW); // valor default
	const [valuesUpdate, setValuesUpdate] = useState<MissionsType>(valuesInitialForm);
	const inputRef = useRef<HTMLInputElement>(null);
	const verifyCardsFiltered = filteredMissions.length > 0 ? filteredMissions : state;

	const handlerFilterSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { target } = e;
		setFilterSelected(target.value as keyof MissionsType);
		inputRef.current?.focus(); // ao selecionar a opção o cursor do mouse é direcionado para o elemento input text;
	};

	const handlerFilterGeneric = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e;
		// // No mínimo 3 letras para realizar o filtro
		if (target.value.length >= 3) {
			const targetInputLower = target.value.toLowerCase();
			const filtered = state.filter((mission) =>
				mission[filterSelected].toString().toLocaleLowerCase().includes(targetInputLower),
			);

			if (filtered.length !== 0) {
				setFiteredMissions(filtered);
			} else if (filteredMissions.length !== 0) setFiteredMissions([]);
		}
		if (target.value.length === 0 && filteredMissions.length !== 0) {
			// só vai ocorrer uma nova renderização nos componentes, caso o filteredMissions tenha recebido um filtro maior que zero
			setFiteredMissions([]);
		}
		setFilterGeneric(target.value);
	};

	const handlerSetDisplayForm = () => {
		setActionSelected(MissionsActionType.NEW);
		setFormDisplay((prev) => !prev);
	};

	return (
		<section className='cards'>
			<h2 className='cards-title'>Missões</h2>
			<section className='cards-filter'>
				<label htmlFor='type-filter'>Selecione o filtro:</label>
				<select name='type-filter' id='type-filter' onChange={(e) => handlerFilterSelected(e)}>
					<option value='name'>Nome</option>
					<option value='year'>Ano</option>
					<option value='country'>País</option>
					<option value='destination'>Destino</option>
				</select>
				{/* <label htmlFor='filter-selected'></label> */}
				<input type='text' value={filterGeneric} onChange={(e) => handlerFilterGeneric(e)} ref={inputRef} />
				<button onClick={() => handlerSetDisplayForm()}>Nova Missão</button>
				{formDisplay && (
					<AddNewMission
						dispatch={dispatch}
						setFormDisplay={setFormDisplay}
						actionSelected={{ actionSelected, setActionSelected }}
						missionValueUpdate={{ valuesUpdate, setValuesUpdate }}
					/>
				)}
			</section>
			<ul>
				{useMemo(
					() =>
						verifyCardsFiltered?.map((mission) => (
							<li key={mission.name}>
								<MissionsCard
									information={mission}
									dispatch={dispatch}
									setFormDisplay={setFormDisplay}
									actionSelected={{ actionSelected, setActionSelected }}
									missionValueUpdate={{ valuesUpdate, setValuesUpdate }}
								/>
							</li>
						)),
					[verifyCardsFiltered],
				)}
			</ul>
		</section>
	);
};
