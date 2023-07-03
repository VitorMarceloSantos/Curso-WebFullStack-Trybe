import { useState } from 'react';
import { AddNewMissionType } from '../../types/AddNewMissionType';

export const AddNewMission = ({ dispatch }: AddNewMissionType) => {
	const [inputName, setInputName] = useState<string>('');
	const [inputDate, setInputDate] = useState<string>('__/__/__');
	const [inputCountry, setInputCountry] = useState<string>('');
	const [inputDestiny, setInputDestiny] = useState<string>('');

	const handlerGenericInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

	};

	const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('Formulário Enviado.');
	};
	return (
		<form>
			<label htmlFor='newMission'>
				Nome:
				<input
					type='text'
					id='newMission'
					name='setInputName'
					value={inputName}
					onChange={(e) => handlerGenericInputs(e)}
				/>
			</label>
			<label htmlFor='newAge'>
				Ano:
				<input
					type='string'
					id='newAge'
					name='setInputDate'
					value={inputDate}
					onChange={(e) => handlerGenericInputs(e)}
				/>
			</label>
			<label htmlFor='newCountry'>
				País:
				<input
					type='text'
					id='newCountry'
					name='setInputCountry'
					value={inputCountry}
					onChange={(e) => handlerGenericInputs(e)}
				/>
			</label>
			<label htmlFor='newDestiny'>
				Destino:
				<input
					type='text'
					id='newDestiny'
					name='setInputDestiny'
					value={inputDestiny}
					onChange={(e) => handlerGenericInputs(e)}
				/>
			</label>
			<button type='submit' onClick={(e) => handlerSubmit(e)}>
				Confirmar
			</button>
		</form>
	);
};
