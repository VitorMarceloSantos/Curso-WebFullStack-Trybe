import { Planets } from '../services/planets';
import { ChildrenType } from '../types/ChildrenType';
import { PlanetsContext } from './PlanetsContext';

export const PlanetsProvider = ({ children }: ChildrenType) => {
	return <PlanetsContext.Provider value={Planets}>{children}</PlanetsContext.Provider>;
};
