import { useState } from 'react';
import { AddNewMissionType } from '../../types/AddNewMissionType';
import { MissionsActionType } from '../../types/MissionsEnum';
import { MissionsType } from '../../types/MissionType';

const valuesInitialForm = {
	name: '',
	year: '',
	country: '',
	destination: '',
};

export const AddNewMission = ({ dispatch }: AddNewMissionType) => {
	const [valuesForm, setValuesForm] = useState<MissionsType>(valuesInitialForm);

	// VAlidar para nenhum campo está vazio
	const handlerGenericInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValuesForm({ ...valuesForm, [name]: value });
	};

	const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch({ type: MissionsActionType.NEW, payload: valuesForm });
	};
	return (
		<form>
			<label htmlFor='newMission'>
				Nome:
				<input
					type='text'
					id='newMission'
					value={valuesForm.name}
					name='name'
					onChange={(e) => handlerGenericInputs(e)}
				/>
			</label>
			<label htmlFor='newAge'>
				Ano:
				<input
					type='string'
					id='newAge'
					name='year'
					value={valuesForm.year}
					onChange={(e) => handlerGenericInputs(e)}
				/>
			</label>
			<label htmlFor='newCountry'>
				País:
				<input
					type='text'
					id='newCountry'
					name='country'
					value={valuesForm.country}
					onChange={(e) => handlerGenericInputs(e)}
				/>
			</label>
			<label htmlFor='newdestination'>
				Destino:
				<input
					type='text'
					id='newdestination'
					name='destination'
					value={valuesForm.destination}
					onChange={(e) => handlerGenericInputs(e)}
				/>
			</label>
			<button type='submit' onClick={(e) => handlerSubmit(e)}>
				Confirmar
			</button>
		</form>
	);
};
