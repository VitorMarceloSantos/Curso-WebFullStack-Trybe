import { createContext } from 'react';
import { PlanetsType } from '../types/PlanetsType';

export const PlanetsContext = createContext<PlanetsType[] | null>(null);
