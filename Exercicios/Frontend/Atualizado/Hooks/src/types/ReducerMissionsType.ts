import { Dispatch } from 'react';
import { MissionsType } from './MissionType';
import { MissionsActionType } from './MissionsEnum';

export type ReducerActionType = {
	type: MissionsActionType;
	payload: { currentValues: MissionsType; valuesDepreciated?: MissionsType };
};

export type MissionValueType = {
	state: MissionsType[];
	dispatch: Dispatch<ReducerActionType>;
};
