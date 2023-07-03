import { MissionsContext } from './MissionsContext';
import { missions } from '../services/missions';
import { ChildrenType } from '../types/ChildrenType';
import { useReducer } from 'react';
import { MissionsType } from '../types/MissionType';
import { ReducerActionType } from '../types/ReducerMissionsType';

const reducer = (state: MissionsType[], action: ReducerActionType): MissionsType[] => {
	switch (action.type) {
		case 'new':
			const newState = [...state, action.payload];
			// console.log(`New: ${newState.map((mission) => mission.name)}`);
			return newState;
		default:
			return state;
	}
};

export const MissionsProvider = ({ children }: ChildrenType) => {
	const [state, dispatch] = useReducer(reducer, missions);

	return <MissionsContext.Provider value={{ state, dispatch }}>{children}</MissionsContext.Provider>;
};
