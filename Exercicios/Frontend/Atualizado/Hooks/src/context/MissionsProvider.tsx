import { MissionsContext } from './MissionsContext';
import { missions } from '../services/missions';
import { ChildrenType } from '../types/ChildrenType';
import { useReducer } from 'react';
import { MissionsType } from '../types/MissionType';
import { ReducerActionType } from '../types/ReducerMissionsType';

const reducer = (state: MissionsType[], action: ReducerActionType): MissionsType[] => {
	const { type, payload } = action;
	// Payload: values -> currentValues: valores atuais, valuesDepreciated: valores que serão atualizados
	switch (type) {
		case 'new':
			const newValues = payload.currentValues;
			const newState = [...state, newValues];
			return newState;
		case 'update':
			const { currentValues, valuesDepreciated } = payload;
			const updateState = [...state];
			const indexUpdate = state.findIndex(({ name }) => name === valuesDepreciated?.name);
			updateState[indexUpdate] = currentValues;
			return updateState;
		case 'delete':
			const deleteValues = payload.currentValues;
			const deletedState = [...state];
			const indexDelete = state.findIndex(({ name }) => name === deleteValues.name);
			deletedState.splice(indexDelete, 1);
			return deletedState;
		default:
			return state;
	}
};

export const MissionsProvider = ({ children }: ChildrenType) => {
	const [state, dispatch] = useReducer(reducer, missions);

	return <MissionsContext.Provider value={{ state, dispatch }}>{children}</MissionsContext.Provider>;
};
