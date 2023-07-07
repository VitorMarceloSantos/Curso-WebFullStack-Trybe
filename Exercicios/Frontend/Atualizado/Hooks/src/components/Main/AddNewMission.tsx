import { useEffect } from 'react';
import { AddNewMissionType } from '../../types/AddNewMissionType';
import { MissionsType } from '../../types/MissionType';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createFormSchema } from '../../validations/formMissionSchema';

// npm install react-hook-form
// npm install @hookform/resolvers
export const AddNewMission = ({ dispatch, setFormDisplay, actionSelected, missionValueUpdate }: AddNewMissionType) => {
	// const [valuesForm, setValuesForm] = useState<MissionsType>(valuesInitialForm);
	const {
		register,
		handleSubmit,
		setFocus,
		formState: { errors },
	} = useForm<MissionsType>({ resolver: joiResolver(createFormSchema) });

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
		<form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
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
		</form>
	);
};
