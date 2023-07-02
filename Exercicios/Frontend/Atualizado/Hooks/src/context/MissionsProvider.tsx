import { MissionsContext } from './MissionsContext';
import { missions } from '../services/missions';
import { ChildrenType } from '../types/ChildrenType';
import { useState, useMemo } from 'react';
import { MissionsType } from '../types/MissionType';

const missionTest = [
	{
		name: 'Voyager 1',
		year: '1977',
		country: 'Brazil',
		destination: 'Espaço interestelar',
	},
];


export const MissionsProvider = ({ children }: ChildrenType) => {
	const [missionsList, setMissionsList] = useState<MissionsType[]>(missions);

	function setMissions(mission: MissionsType[]): void {
		// const newList = missionsList;
		// newList.push(mission);
		// console.log(`new: ${newList}`)
		// console.log(mission);

		setMissionsList(mission);
		// console.log(`Missions: ${missionsList.map((mission) => mission.name)}`);
		// console.log(`NewList: ${newList.map((mission) => mission.name)}`);
		// setMissionsList((prev): MissionsType[] => {
		// 	prev[prev.length] = mission;
		// 	return prev;
		// });
	}
	// Vericar se deve usar ou nao o useMemo
	// const valueContext = useMemo(() => ({missions:missionsList, setMissions}), [missionsList, setMissions]);

	//value do provider está errado, antes estava enviando somente o Missions
	return (
		<MissionsContext.Provider value={{ missions: missionsList, setMissions }}>{children}</MissionsContext.Provider>
	);
};
