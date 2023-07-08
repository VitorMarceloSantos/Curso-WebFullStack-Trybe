import { Dispatch } from 'react';
import { ReducerActionType } from './ReducerMissionsType';
import { MissionsActionType } from './MissionsEnum';
import { MissionsType } from './MissionType';

export type AddNewMissionType = {
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
