import { useEffect, useRef, useState } from 'react';
import { AddNewMissionType } from '../../types/AddNewMissionType';
import { MissionsType } from '../../types/MissionType';
import { valuesInitialForm } from '../../utils/InitialValues';

export const AddNewMission = ({ dispatch, setFormDisplay, actionSelected, missionValueUpdate }: AddNewMissionType) => {
	const [valuesForm, setValuesForm] = useState<MissionsType>(valuesInitialForm);
	const inputFocus = useRef<HTMLInputElement>(null);

	// onBlur -> é chamado quando o foco deixou o elemento
	const handlerGenericInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (value.length !== 0) {
			setValuesForm({ ...valuesForm, [name]: value });
			// Utilizar alert aqui !!
		} else console.log(`Digite um ${name} válido.`);
	};

	const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log(actionSelected.actionSelected);
		if (actionSelected.actionSelected === 'update') {
			console.log('Somente update');
		} else console.log('Deu ruim');
		actionSelected.actionSelected === 'update'
			? dispatch({
					type: actionSelected.actionSelected,
					payload: { currentValues: valuesForm, valuesDepreciated: missionValueUpdate.valuesUpdate },
			  })
			: dispatch({ type: actionSelected.actionSelected, payload: { currentValues: valuesForm } });
		setValuesForm(valuesInitialForm); // resetando os valores
		setFormDisplay(false); // Fechando o formulário(ao fechar o formulário os valores(input values) são apagados)
	};

	useEffect(() => {
		inputFocus.current?.focus();
	}, []);
	return (
		<form>
			<label htmlFor='newMission'>
				Nome:
				<input type='text' id='newMission' name='name' onBlur={(e) => handlerGenericInputs(e)} ref={inputFocus} />
			</label>
			<label htmlFor='newAge'>
				Ano:
				<input type='string' id='newAge' name='year' onBlur={(e) => handlerGenericInputs(e)} />
			</label>
			<label htmlFor='newCountry'>
				País:
				<input type='text' id='newCountry' name='country' onBlur={(e) => handlerGenericInputs(e)} />
			</label>
			<label htmlFor='newdestination'>
				Destino:
				<input type='text' id='newdestination' name='destination' onBlur={(e) => handlerGenericInputs(e)} />
			</label>
			<button type='submit' onClick={(e) => handlerSubmit(e)}>
				Confirmar
			</button>
		</form>
	);
};
