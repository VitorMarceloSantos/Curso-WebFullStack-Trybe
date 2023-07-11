import { useContext, useMemo, useRef, useState } from 'react';
import { MissionsContext } from '../../context/MissionsContext';
import { MissionsType } from '../../types/MissionType';
import { MissionForm } from './MissionForm';
import { MissionsActionType } from '../../types/MissionsEnum';
import { valuesInitialForm } from '../../utils/InitialValues';
import { Card } from './Card';
import { CardActions } from './Card/Actions';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, MenuItem, Select, SelectChangeEvent } from '@mui/material';

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

	const handlerFilterSelected = (e: SelectChangeEvent<'name' | 'year' | 'country' | 'destination'>) => {
		const { target } = e;
		setFilterSelected(target.value as keyof MissionsType);
		inputRef.current?.focus(); // ao selecionar a opção o cursor do mouse é direcionado para o elemento input text;
	};

	const handlerFilterGeneric = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
				{/* <label htmlFor='type-filter'>Selecione o filtro:</label>
				<select name='type-filter' id='type-filter' onChange={(e) => handlerFilterSelected(e)}>
					<option value='name'>Nome</option>
					<option value='year'>Ano</option>
					<option value='country'>País</option>
					<option value='destination'>Destino</option>
				</select> */}
				{/* <label htmlFor='filter-selected'></label> */}

				<Paper
					component='form'
					sx={{
						p: '2px 4px',
						display: 'flex',
						alignItems: 'center',
						width: 400,
						backgroundColor: 'transparent',
						border: '1px solid yellow',
					}}
				>
					<Select
						className='input-options'
						value={filterSelected}
						onChange={(e) => handlerFilterSelected(e)}
						name='type-filter'
						// Retirar bordas do input
						variant='standard'
						disableUnderline={true}
						sx={[
							{ color: 'yellow', border: 'none', width: '110px' },
							// {
							// 	'&:hover': {
							// 		color: 'red',
							// 	},
							// },
						]}
					>
						<MenuItem value='name'>Nome</MenuItem>
						<MenuItem value='year'>Ano</MenuItem>
						<MenuItem value='country'>País</MenuItem>
						<MenuItem value='destination'>Destino</MenuItem>
					</Select>
					<Divider sx={{ height: 40, m: 0.5, background: 'yellow' }} orientation='vertical' />
					<InputBase
						sx={{ ml: 1, flex: 1, color: 'yellow' }}
						placeholder='Pesquisar'
						inputRef={inputRef}
						value={filterGeneric}
						onChange={(e) => handlerFilterGeneric(e)}
					/>
					<IconButton type='button' sx={{ p: '10px', color: 'yellow' }} aria-label='search'>
						<SearchIcon />
					</IconButton>
				</Paper>
				{/* <input type='text' value={filterGeneric} onChange={(e) => handlerFilterGeneric(e)} ref={inputRef} /> */}
				<button onClick={() => handlerSetDisplayForm()}>Nova Missão</button>
				{formDisplay && (
					<MissionForm
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
								<Card.Root>
									<Card.Icon />
									<Card.Content information={mission} />
									<CardActions.Root>
										<CardActions.Edit
											information={mission}
											setFormDisplay={setFormDisplay}
											actionSelected={{ actionSelected, setActionSelected }}
											missionValueUpdate={{ valuesUpdate, setValuesUpdate }}
										/>
										<CardActions.Delete information={mission} dispatch={dispatch} />
									</CardActions.Root>
								</Card.Root>
							</li>
						)),
					[verifyCardsFiltered],
				)}
			</ul>
		</section>
	);
};
