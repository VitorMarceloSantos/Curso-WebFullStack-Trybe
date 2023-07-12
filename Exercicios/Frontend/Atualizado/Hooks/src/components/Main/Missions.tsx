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
import { Button, Divider, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';

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
			{/* <h2 className='cards-title'>Missões</h2> */}
			<section className='cards-filter'>
				<div className='cards-filter-container'>
					<div className='cards-filter-paper'>
						<Paper
							component='form'
							sx={{
								p: '2px 6px',
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
									{
										color: 'black',
										border: 'none',
										width: '110px',
										backgroundColor: 'yellow',
										textAlign: 'center',
										fontWeight: 'bold',
										fontFamily: 'Times New Roman',
									},
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
							<Divider sx={{ height: 40, m: 0.5, background: 'yellow', marginLeft: '.8rem' }} orientation='vertical' />
							<InputBase
								sx={{ ml: 1, flex: 1, color: 'yellow', fontWeight: 'bold', fontFamily: 'Times New Roman' }}
								placeholder='Pesquisar'
								inputRef={inputRef}
								value={filterGeneric}
								onChange={(e) => handlerFilterGeneric(e)}
							/>
							<IconButton type='button' sx={{ p: '0px', color: 'yellow' }} aria-label='search'>
								<SearchIcon />
							</IconButton>
						</Paper>
					</div>
					<div className='cards-filter-button-new-mission'>
						<Button
							variant='outlined'
							onClick={() => handlerSetDisplayForm()}
							startIcon={<RocketLaunch />}
							sx={[
								{ borderColor: 'yellow', color: 'yellow', fontWeight: 'bold' },
								{
									'&:hover': {
										color: 'black',
										backgroundColor: 'yellow',
										borderColor: 'black',
									},
								},
							]}
						>
							Criar Missão
						</Button>
					</div>
				</div>
				<div className='cards-filter-form'>
					{formDisplay && (
						<MissionForm
							dispatch={dispatch}
							setFormDisplay={setFormDisplay}
							actionSelected={{ actionSelected, setActionSelected }}
							missionValueUpdate={{ valuesUpdate, setValuesUpdate }}
						/>
					)}
				</div>
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