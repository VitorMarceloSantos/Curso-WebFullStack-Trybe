export type MissionsType = {
	name: string;
	year: string;
	country: string;
	destination: string;
};

export type MissionSetType = {
	missions: MissionsType[];
	setMissions: (mission: MissionsType[]) => void;
};

export type ReturnMissionsType = {
	information: MissionsType;
};
