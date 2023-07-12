// npm install react-hook-form
// npm install @hookform/resolvers
import { useEffect } from 'react';
import { AddNewMissionType } from '../../types/MissionFormType';
import { MissionsType } from '../../types/MissionType';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createFormSchema } from '../../validations/formMissionSchema';
import { Button, InputBase, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { valuesInitialForm } from '../../utils/InitialValues';

export const MissionForm = ({ dispatch, setFormDisplay, actionSelected, missionValueUpdate }: AddNewMissionType) => {
	const {
		handleSubmit,
		setFocus,
		formState: { errors },
		control,
	} = useForm<MissionsType>({
		resolver: joiResolver(createFormSchema),
		defaultValues: { ...valuesInitialForm, year: undefined },
	}); // year foi definida como undefined para que o conteúdo do placeholder possa aparecer, caso contrário o conteúdo do campo seria 0

	const onSubmit: SubmitHandler<MissionsType> = (data) => {
		actionSelected.actionSelected === 'update'
			? dispatch({
					type: actionSelected.actionSelected,
					payload: { currentValues: data, valuesDepreciated: missionValueUpdate.valuesUpdate },
			  })
			: dispatch({ type: actionSelected.actionSelected, payload: { currentValues: data } });
		setFormDisplay(false); // Fechando o formulário(ao fechar o formulário os valores(input values) são apagados)
	};

	// onBlur -> é chamado quando o foco deixou o elemento
	// https://tkdodo.eu/blog/avoiding-use-effect-with-callback-refs
	// const refInputName = useCallback((node: HTMLInputElement) => {
	// 	node?.focus();
	// }, []);

	useEffect(() => {
		//https://react-hook-form.com/docs/useform/setfocus
		setFocus('name');
	}, [setFocus]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Paper
				component='form'
				sx={{
					p: '1rem',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					background: 'transparent',
					border: '1px solid yellow',
					color: 'yellow',
				}}
			>
				<Controller
					name='name'
					control={control}
					render={({ field }) => (
						<InputBase
							{...field}
							sx={{
								m: 1,
								flex: 1,
								color: 'yellow',
								fontWeight: 'bold',
								fontFamily: 'Times New Roman',
								border: '1px solid yellow',
								borderRadius: '5px',
								textAlign: 'justify',
								width: '50vw',
								maxWidth: '550px',
							}}
							placeholder='Nome'
							type='text'
						/>
					)}
				/>
				{errors.name && <p>{errors.name?.message}</p>}
				<Controller
					name='year'
					control={control}
					render={({ field }) => (
						<InputBase
							placeholder='Ano'
							type='number'
							{...field}
							sx={{
								m: 1,
								flex: 1,
								color: 'yellow',
								fontWeight: 'bold',
								fontFamily: 'Times New Roman',
								border: '1px solid yellow',
								borderRadius: '5px',
								textAlign: 'justify',
								width: '50vw',
								maxWidth: '550px',
							}}
						/>
					)}
				/>
				{errors.year && <p>{errors.year?.message}</p>}
				<Controller
					name='country'
					control={control}
					render={({ field }) => (
						<InputBase
							{...field}
							sx={{
								m: 1,
								flex: 1,
								color: 'yellow',
								fontWeight: 'bold',
								fontFamily: 'Times New Roman',
								border: '1px solid yellow',
								borderRadius: '5px',
								textAlign: 'justify',
								width: '50vw',
								maxWidth: '550px',
							}}
							placeholder='País'
							type='text'
						/>
					)}
				/>
				{errors.country && <p>{errors.country?.message}</p>}
				<Controller
					name='destination'
					control={control}
					render={({ field }) => (
						<InputBase
							{...field}
							sx={{
								m: 1,
								flex: 1,
								color: 'yellow',
								fontWeight: 'bold',
								fontFamily: 'Times New Roman',
								border: '1px solid yellow',
								borderRadius: '5px',
								textAlign: 'justify',
								width: '50vw',
								maxWidth: '550px',
							}}
							placeholder='Destino'
							type='text'
						/>
					)}
				/>
				{errors.destination && <p>{errors.destination?.message}</p>}
			</Paper>
			{/* O button submit deve está de fora do paper */}
			<div className='button-check-form'>
				<Button
					type='submit'
					variant='outlined'
					startIcon={<CheckCircleIcon />}
					sx={[
						{ marginTop: '.5rem', borderColor: 'yellow', color: 'yellow', fontWeight: 'bold' },
						{
							'&:hover': {
								color: 'black',
								backgroundColor: 'yellow',
								borderColor: 'black',
							},
						},
					]}
				>
					Enviar
				</Button>
			</div>
			{/* 
			<label htmlFor='newMission'>
				Nome:
				<input type='text' id='newMission' {...register('name')} />
				{errors.name && <p>{errors.name?.message}</p>}
			</label> 
			<label htmlFor='newYear'>
				Ano:
				<input type='number' id='newYear' {...register('year')} />
				{errors.year && <p>{errors.year?.message}</p>}
			</label>
			<label htmlFor='newCountry'>
				País:
				<input type='text' id='newCountry' {...register('country')} />
				{errors.country && <p>{errors.country?.message}</p>}
			</label>
			<label htmlFor='newdestination'>
				Destino:
				<input type='text' id='newdestination' {...register('destination')} />
				{errors.destination && <p>{errors.destination?.message}</p>}
			</label>
			<button type='submit'>Confirmar</button>
			*/}
		</form>
	);
};
