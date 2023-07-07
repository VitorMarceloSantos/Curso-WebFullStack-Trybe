import { Dispatch } from 'react';
import { ReducerActionType } from './ReducerMissionsType';
import { MissionsActionType } from './MissionsEnum';
export type MissionsType = {
	name: string;
	year: number;
	country: string;
	destination: string;
};

export type ReturnMissionsType = {
	information: MissionsType;
	dispatch: Dispatch<ReducerActionType>;
	setFormDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	actionSelected: {
		actionSelected: MissionsActionType;
		setActionSelected: React.Dispatch<React.SetStateAction<MissionsActionType>>;
	};

	missionValueUpdate: {
		valuesUpdate: MissionsType;
		setValuesUpdate: React.Dispatch<React.SetStateAction<MissionsType>>;
	};
};
