import { MissionsType } from './MissionType';
import {MissionsActionType} from './MissionsEnum'

export type ReducerActionType = {
	type: MissionsActionType;
	payload: MissionsType;
};
