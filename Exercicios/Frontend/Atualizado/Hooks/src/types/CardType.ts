import { MissionsType } from './MissionType';
import { Dispatch } from 'react';
import { ReducerActionType } from './ReducerMissionsType';
import { MissionsActionType } from './MissionsEnum';

export type CardContentProps = {
	information: MissionsType;
};

export type CardActionEditProps = {
	information: MissionsType;
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

export type CardActionDeleteProps = {
	information: MissionsType;
	dispatch: Dispatch<ReducerActionType>;
};
