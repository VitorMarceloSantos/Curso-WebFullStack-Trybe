import { useContext, useMemo, useReducer, useRef, useState } from 'react';
import { MissionsCard } from './MissionsCard';
import { MissionsContext } from '../../context/MissionsContext';
import { MissionsType } from '../../types/MissionType';
// import { ReducerActionType } from '../../types/ReducerMissionsType';
// import { MissionsActionType } from '../../types/MissionsEnum';

// actions, payload
// const reducerMissions = (state: MissionsType[], action: ReducerActionType): MissionsType[] => {
// 	switch (action.type) {
// 		case 'new':
// 			const {newMission, setMissions} = action.payload
// 			state.push(newMission);
// 			console.log(`state: ${state.map((mission) => mission.name)}`)
// 			setMissions(state);

// 			return state;
// 		// const newArray = state as MissionsType[];
// 		// newArray.push(action.payload);
// 		// console.log(newArray)
// 		// return newArray

// 		default:
// 			return state;
// 	}
// };
const newMission: MissionsType[] = [
	{
		country: 'Brasil',
		destination: 'Lua',
		name: 'VqV',
		year: '2023',
	},
];

export const Missions = () => {
	const { missions, setMissions } = useContext(MissionsContext);
	const [filteredMissions, setFiteredMissions] = useState<MissionsType[]>([]);
	const [filterSelected, setFilterSelected] = useState<keyof MissionsType>('name');
	const [filterGeneric, setFilterGeneric] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);
	const verifyCardsFiltered = filteredMissions.length > 0 ? filteredMissions : missions;
	// const [state, dispatch] = useReducer(reducerMissions, verifyCardsFiltered);

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
			const filtered = missions.filter((mission) =>
				mission[filterSelected].toLocaleLowerCase().includes(targetInputLower),
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
				{/* <button onClick={() => dispatch({ type: MissionsActionType.NEW, payload: { newMission, setMissions }})}>Adicionar</button> */}
				<button onClick={() => setMissions(newMission)}>Adicionar</button>
			</section>
			<ul>
				{useMemo(
					() =>
						verifyCardsFiltered?.map((mission) => (
							<li key={mission.name}>
								<MissionsCard information={mission} />
							</li>
						)),
					[verifyCardsFiltered],
				)}
				{/* {verifyCardsFiltered.map((mission) => (
					<li key={mission.name}>
						<MissionsCard information={mission} />
					</li>
				))} */}
			</ul>
		</section>
	);
};
