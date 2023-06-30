import { MissionsContext } from './MissionsContext';
import { Missions } from '../services/missions';
import { ChildrenType } from '../types/ChildrenType';
import { useMemo, useState } from 'react';
import { MissionsType } from '../types/MissionType';

export const MissionsProvider = ({ children }: ChildrenType): MissionsType[] => {
	const [missionsList, setMissionsList] = useState<MissionsType[]>(Missions);
	const addMissionsList = (mission: MissionsType): void => {
		const newList = missionsList;
		newList.push(mission);
		setMissionsList(newList);
		// setMissionsList((prev: MissionsType[]):MissionsType[] =>  prev.push(mission));
	};
	// Vericar se deve usar ou nao o useMemo
	const valueContext = useMemo(() => ({ missionsList, addMissionsList }), [missionsList, addMissionsList]);

	//value do provider está errado, antes estava enviando somente o Missions
	return <MissionsContext.Provider value={valueContext}>{children}</MissionsContext.Provider>;
};
