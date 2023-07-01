import { MissionsContext } from './MissionsContext';
import { missions } from '../services/missions';
import { ChildrenType } from '../types/ChildrenType';
import { useState, useMemo } from 'react';
import { MissionsType } from '../types/MissionType';

console.log('Provider')
export const MissionsProvider = ({ children }: ChildrenType) => {
	const [missionsList, setMissionsList] = useState<MissionsType[]>(missions);
	console.log(`Provider: ${missionsList.map((mission) => mission.name)}`)
	function setMissions(mission: MissionsType): void {
		const newList = missionsList;
		newList.push(mission);
		console.log(mission)
		console.log(`Missions: ${missionsList.map((mission) => mission.name)}`)
		setMissionsList(newList);
		console.log(`Missions: ${missionsList.map((mission) => mission.name)}`)
		console.log(`NewList: ${newList.map((mission) => mission.name)}`)
		// setMissionsList((prev): MissionsType[] => {
		// 	prev[prev.length] = mission;
		// 	return prev;
		// });
	}
	// Vericar se deve usar ou nao o useMemo
	const valueContext = useMemo(() => ({missions:missionsList, setMissions}), [missionsList, setMissions]);

	//value do provider está errado, antes estava enviando somente o Missions
	return (
		<MissionsContext.Provider value={valueContext}>{children}</MissionsContext.Provider>
	);
};
