import { MissionsContext } from './MissionsContext';
import { Missions } from '../services/missions';
import { ChildrenType } from '../types/ChildrenType';

export const MissionsProvider = ({ children }: ChildrenType) => {
	return <MissionsContext.Provider value={Missions}>{children}</MissionsContext.Provider>;
};
